import { createHmac, randomBytes, timingSafeEqual } from 'node:crypto';
import { isIP } from 'node:net';

type Env = Record<string, string | undefined>;
type Options = { env?: Env; now?: () => number; store?: ContactStore; fetcher?: typeof fetch };
const hmac = (secret: string, value: string) => createHmac('sha256', secret).update(value).digest('base64url');
const json = (body: unknown, status = 200) => Response.json(body, { status, headers: { 'Cache-Control': 'no-store' } });

const fallback = 'Unable to send your message. Please try again later or email ask@iyanbarry.com.';
const failure = (status: number) => json({ error: fallback }, status);
const required = ['CONTACT_TENANT_ID', 'CONTACT_CLIENT_ID', 'CONTACT_CLIENT_SECRET', 'CONTACT_TABLE_URL', 'CONTACT_TABLE_SAS', 'CONTACT_SIGNING_SECRET'];
function configured(env: Env) {
  return env.CONTACT_FORM_ENABLED === 'true' && required.every(key => Boolean(env[key]?.trim())) && (env.CONTACT_SIGNING_SECRET?.length ?? 0) >= 32;
}
function allowedOrigin(request: Request, env: Env) {
  const origin = request.headers.get('origin');
  if (!origin) return request.method === 'GET';
  if (['https://iyanbarry.com', 'https://www.iyanbarry.com'].includes(origin)) return true;
  if (env.VERCEL) return false;
  try {
    const url = new URL(origin);
    return url.origin === origin && url.protocol === 'http:' && url.hostname === 'localhost';
  } catch { return false; }
}

class ContactError extends Error {
  constructor(public status: number, public retryAfter?: number) { super('Contact request failed'); }
}
export type ContactInput = { name: string; email: string; message: string; website: string; challengeToken: string };
export async function parseContactRequest(request: Request): Promise<ContactInput> {
  if (request.headers.get('content-type')?.split(';')[0].trim().toLowerCase() !== 'application/json') throw new ContactError(415);
  const declared = request.headers.get('content-length');
  if (declared !== null && (!/^\d+$/.test(declared) || Number(declared) > 16384)) throw new ContactError(413);
  if (!request.body) throw new ContactError(400);
  const reader = request.body.getReader();
  const chunks: Uint8Array[] = [];
  let size = 0;
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      size += value.byteLength;
      if (size > 16384) {
        await reader.cancel();
        throw new ContactError(413);
      }
      chunks.push(value);
    }
  } finally { reader.releaseLock(); }
  let data: ContactInput;
  try { data = JSON.parse(new TextDecoder('utf-8', { fatal: true }).decode(Buffer.concat(chunks))); }
  catch { throw new ContactError(400); }
  if (!data || Array.isArray(data) || typeof data !== 'object') throw new ContactError(400);
  for (const [key, max] of [['name', 100], ['email', 254], ['message', 5000], ['challengeToken', 1024]] as const) {
    if (typeof data[key] !== 'string' || !data[key].trim() || data[key].length > max) throw new ContactError(400);
  }
  if (data.website !== '' || /[\u0000-\u001f\u007f-\u009f]/.test(data.name + data.email)) throw new ContactError(400);
  if (!/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(data.email)) throw new ContactError(400);
  return { name: data.name.trim(), email: data.email.trim(), message: data.message.trim(), website: '', challengeToken: data.challengeToken };
}

function requestIP(request: Request, env: Env): string {
  // Only Vercel's normalized proxy header is trusted. Local requests share one bucket.
  if (!env.VERCEL) return '127.0.0.1';
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0].trim() ?? '';
  if (!isIP(ip)) throw new ContactError(503);
  return isIP(ip) === 6 ? new URL(`http://[${ip}]/`).hostname.slice(1, -1) : ip;
}
const ipHash = (env: Env, ip: string, time: number) => hmac(env.CONTACT_SIGNING_SECRET!, `ip:${Math.floor(time / 86400000)}:${ip}`);
type Challenge = { issued: number; nonce: string; ip: string };
export function verifyChallenge(token: string, request: Request, env: Env, time: number): Challenge {
  if (!/^[A-Za-z0-9_-]+\.[A-Za-z0-9_-]{43}$/.test(token) || token.length > 1024) throw new ContactError(400);
  const [payload, signature] = token.split('.');
  const expected = hmac(env.CONTACT_SIGNING_SECRET!, payload);
  if (!timingSafeEqual(Buffer.from(signature), Buffer.from(expected))) throw new ContactError(400);
  let data: Challenge;
  try { data = JSON.parse(Buffer.from(payload, 'base64url').toString()); }
  catch { throw new ContactError(400); }
  if (!data || !Number.isSafeInteger(data.issued) || typeof data.nonce !== 'string' || !/^[A-Za-z0-9_-]{32}$/.test(data.nonce) || time - data.issued < 3000 || time - data.issued > 1800000) throw new ContactError(400);
  if (data.ip !== ipHash(env, requestIP(request, env), data.issued)) throw new ContactError(400);
  return data;
}

export type StoredEntity = { count?: number; expiresAt: number; etag?: string };
export interface ContactStore {
  get(partition: string, row: string): Promise<StoredEntity | null>;
  insert(partition: string, row: string, entity: StoredEntity): Promise<boolean>;
  replace(partition: string, row: string, entity: StoredEntity, etag: string): Promise<boolean>;
}
export async function consumeQuota(store: ContactStore, partition: string, row: string, limit: number, expiresAt: number, time: number) {
  // Only definite insert/ETag conflicts are retried, never uncertain transport failures.
  for (let attempt = 0; attempt < 8; attempt++) {
    const current = await store.get(partition, row);
    if (current === null) {
      if (await store.insert(partition, row, { count: 1, expiresAt })) return;
    } else {
      if (!Number.isSafeInteger(current.count) || current.count! < 0 || !current.etag || current.etag === '*') throw new ContactError(503);
      if (current.count! >= limit) throw new ContactError(429, Math.max(1, Math.ceil((expiresAt - time) / 1000)));
      if (await store.replace(partition, row, { count: current.count! + 1, expiresAt }, current.etag)) return;
    }
  }
  throw new ContactError(503);
}

export function createAzureStore(env: Env, fetcher: typeof fetch = fetch): ContactStore {
  const base = env.CONTACT_TABLE_URL?.replace(/\/$/, '');
  const sas = env.CONTACT_TABLE_SAS?.replace(/^\?/, '');
  if (base !== 'https://iyanbarrycontact.table.core.windows.net/ContactLimits' || !sas || !new URLSearchParams(sas).get('sig')) throw new ContactError(503);
  function entityURL(partition: string, row: string) {
    if (![partition, row].every(key => /^[A-Za-z0-9_-]+$/.test(key))) throw new ContactError(503);
    return `${base}(PartitionKey='${partition}',RowKey='${row}')?${sas}`;
  }
  async function call(url: string, method: string, body?: unknown, etag?: string) {
    return fetcher(url, {
      method, redirect: 'error', cache: 'no-store', signal: AbortSignal.timeout(5000),
      headers: { Accept: 'application/json;odata=nometadata', 'Content-Type': 'application/json', 'x-ms-version': '2019-02-02', 'x-ms-date': new Date().toUTCString(), DataServiceVersion: '3.0', MaxDataServiceVersion: '3.0', Prefer: 'return-no-content', ...(etag ? { 'If-Match': etag } : {}) },
      ...(body ? { body: JSON.stringify(body) } : {}),
    });
  }
  function wireEntity(partition: string, row: string, entity: StoredEntity) {
    return { PartitionKey: partition, RowKey: row, ...(entity.count !== undefined ? { count: entity.count } : {}), expiresAt: new Date(entity.expiresAt).toISOString(), 'expiresAt@odata.type': 'Edm.DateTime' };
  }
  return {
    async get(partition, row) {
      const response = await call(entityURL(partition, row), 'GET');
      if (response.status === 404) return null;
      if (response.status !== 200) throw new ContactError(503);
      const data = await response.json();
      return { count: data.count, expiresAt: Date.parse(data.expiresAt), etag: response.headers.get('etag') ?? undefined };
    },
    async insert(partition, row, entity) {
      entityURL(partition, row); // Validate keys before serialization.
      const response = await call(`${base}?${sas}`, 'POST', wireEntity(partition, row, entity));
      if (response.status === 409) return false;
      if (response.status !== 204 && response.status !== 201) throw new ContactError(503);
      return true;
    },
    async replace(partition, row, entity, etag) {
      if (!etag || etag === '*') throw new ContactError(503);
      const response = await call(entityURL(partition, row), 'PUT', wireEntity(partition, row, entity), etag);
      if (response.status === 412) return false;
      if (response.status !== 204) throw new ContactError(503);
      return true;
    },
  };
}

export async function sendContactMail(env: Env, input: Pick<ContactInput, 'name' | 'email' | 'message'>, fetcher: typeof fetch = fetch) {
  const auth = await fetcher(`https://login.microsoftonline.com/${encodeURIComponent(env.CONTACT_TENANT_ID!)}/oauth2/v2.0/token`, {
    method: 'POST', redirect: 'error', cache: 'no-store', signal: AbortSignal.timeout(15000),
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ grant_type: 'client_credentials', client_id: env.CONTACT_CLIENT_ID!, client_secret: env.CONTACT_CLIENT_SECRET!, scope: 'https://graph.microsoft.com/.default' }).toString(),
  });
  if (auth.status !== 200) throw new ContactError(502);
  const token = await auth.json();
  if (typeof token.access_token !== 'string' || !token.access_token) throw new ContactError(502);
  // Both POSTs are single-attempt: an ambiguous send timeout must never trigger duplicate mail.
  const delivered = await fetcher('https://graph.microsoft.com/v1.0/users/website@iyanbarry.com/sendMail', {
    method: 'POST', redirect: 'error', cache: 'no-store', signal: AbortSignal.timeout(15000),
    headers: { Authorization: `Bearer ${token.access_token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      message: {
        subject: 'Website contact enquiry',
        body: { contentType: 'Text', content: `Name: ${input.name}\nEmail: ${input.email}\n\n${input.message}` },
        toRecipients: [{ emailAddress: { address: 'ask@iyanbarry.com' } }],
        replyTo: [{ emailAddress: { address: input.email, name: input.name } }],
      },
      saveToSentItems: false,
    }),
  });
  if (delivered.status !== 202) throw new ContactError(502);
}

export function createContactHandlers(options: Options = {}) {
  const env = options.env ?? process.env;
  const now = options.now ?? Date.now;
  const fetcher = options.fetcher ?? fetch;
  return {
    async POST(request: Request) {
      if (!configured(env)) return failure(503);
      if (!allowedOrigin(request, env)) return failure(403);
      try {
        const input = await parseContactRequest(request);
        const time = now();
        const challenge = verifyChallenge(input.challengeToken, request, env, time);
        const store = options.store ?? createAzureStore(env, fetcher);
        const day = Math.floor(time / 86400000);
        const hour = Math.floor(time / 3600000);
        // Global admission comes first to bound all nonce/IP writes, even under attack.
        // Replays, per-IP rejections, and delivery failures consume attempts intentionally.
        // Never roll back a reservation: ambiguous network outcomes must stay fail-closed.
        await consumeQuota(store, `day-${day}`, 'global', 30, (day + 1) * 86400000, time);
        await consumeQuota(store, `day-${day}`, `ip-${ipHash(env, requestIP(request, env), time)}-${hour}`, 3, (hour + 1) * 3600000, time);
        // Use issuance day, not submission day, so midnight cannot bypass replay protection.
        const claimDay = `day-${Math.floor(challenge.issued / 86400000)}`;
        if (!await store.insert(claimDay, `nonce-${challenge.nonce}`, { expiresAt: challenge.issued + 1800000 })) throw new ContactError(400);
        await sendContactMail(env, input, fetcher);
        return json({ ok: true });
      } catch (error) {
        const response = failure(error instanceof ContactError ? error.status : 503);
        if (error instanceof ContactError && error.status === 429) response.headers.set('Retry-After', String(error.retryAfter ?? 60));
        return response;
      }
    },
    async GET(request: Request) {
      if (!configured(env)) return failure(503);
      if (!allowedOrigin(request, env)) return failure(403);
      try {
        const issued = now();
        const ip = requestIP(request, env);
        const secret = env.CONTACT_SIGNING_SECRET!;
        const payload = Buffer.from(JSON.stringify({ issued, nonce: randomBytes(24).toString('base64url'), ip: ipHash(env, ip, issued) })).toString('base64url');
        return json({ token: `${payload}.${hmac(secret, payload)}` });
      } catch { return failure(503); }
    },
  };
}
