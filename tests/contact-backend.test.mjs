import test from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { mkdtempSync, rmSync, existsSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { createRequire } from 'node:module';
const out = mkdtempSync(join(tmpdir(), 'contact-tests-'));
let core = {};
if (existsSync('lib/contact-server.ts')) {
  execFileSync(process.execPath, ['node_modules/typescript/bin/tsc', 'lib/contact-server.ts', '--outDir', out, '--target', 'es2022', '--module', 'commonjs', '--lib', 'es2022,dom', '--esModuleInterop', '--strict', '--skipLibCheck'], { stdio: 'inherit' });
  core = createRequire(import.meta.url)(join(out, 'contact-server.js'));
}
process.on('exit', () => rmSync(out, { recursive: true, force: true }));

test('challenge endpoint fails closed for missing configuration and untrusted origins', async () => {
  for (const key of Object.keys(env).filter(k => k.startsWith('CONTACT_'))) {
    const api = core.createContactHandlers({ env: { ...env, [key]: '' } });
    const response = await api.GET(request());
    assert.equal(response.status, 503, key);
    assert.equal(response.headers.get('cache-control'), 'no-store');
  }
  const api = core.createContactHandlers({ env });
  for (const origin of ['https://evil.test', 'https://iyanbarry.com.evil.test', 'null', 'http://localhost:3000', 'https://iyanbarry.com/']) {
    assert.equal((await api.GET(request('GET', undefined, { origin }))).status, 403, origin);
  }
  const sameOriginGet = request();
  sameOriginGet.headers.delete('origin'); // Same-origin browser GET often omits Origin.
  assert.equal((await api.GET(sameOriginGet)).status, 200);
  assert.equal((await api.GET(request('GET', undefined, { origin: 'https://www.iyanbarry.com' }))).status, 200);
  const local = core.createContactHandlers({ env: { ...env, VERCEL: undefined } });
  assert.equal((await local.GET(request('GET', undefined, { origin: 'http://localhost:3000' }))).status, 200);
  assert.equal((await local.GET(request('GET', undefined, { origin: 'http://localhost.evil.test' }))).status, 403);
});
test('parser accepts plain text and enforces field, honeypot and byte bounds', async () => {
  assert.equal(typeof core.parseContactRequest, 'function');
  const valid = { name: 'Ada', email: 'ada@example.com', message: '<b>Literal text</b>\nNext line', website: '', challengeToken: 'token' };
  assert.deepEqual(await core.parseContactRequest(request('POST', valid)), valid);
  for (const bad of [null, [], {}, { ...valid, name: '' }, { ...valid, name: 'a'.repeat(101) }, { ...valid, name: 'a\r\nb' }, { ...valid, name: 'a\u0085b' }, { ...valid, email: 'a\r\n@example.com' }, { ...valid, email: 'a'.repeat(255) }, { ...valid, email: 'not email' }, { ...valid, message: '' }, { ...valid, message: 'a'.repeat(5001) }, { ...valid, website: 'spam' }, { ...valid, website: 0 }, { ...valid, challengeToken: '' }]) {
    await assert.rejects(() => core.parseContactRequest(request('POST', bad)));
  }
  await assert.rejects(() => core.parseContactRequest(new Request('https://iyanbarry.com/api/contact', { method: 'POST', headers: { 'content-type': 'application/json' }, body: '{' })));
  await assert.rejects(() => core.parseContactRequest(request('POST', valid, { 'content-type': 'text/plain' })));
  let cancelled = false;
  const huge = new Request('https://iyanbarry.com/api/contact', { method: 'POST', headers: { 'content-type': 'application/json' }, duplex: 'half', body: new ReadableStream({ pull(c) { c.enqueue(new Uint8Array(9000)); }, cancel() { cancelled = true; } }) });
  await assert.rejects(() => core.parseContactRequest(huge), { status: 413 });
  assert.equal(cancelled, true);
  await assert.rejects(() => core.parseContactRequest(request('POST', valid, { 'content-length': '16385' })), { status: 413 });
  await assert.rejects(() => core.parseContactRequest(request('POST', { ...valid, message: '😀'.repeat(4500) })), { status: 413 });
});
test('challenge binds to normalized deployed IP, time, signature, and ignores local forwarded headers', async () => {
  assert.equal(typeof core.verifyChallenge, 'function');
  const start = 1800000000000;
  const api = core.createContactHandlers({ env, now: () => start });
  const token = (await (await api.GET(request())).json()).token;
  const verify = (t = token, req = request(), at = start + 3000, e = env) => core.verifyChallenge(t, req, e, at);
  assert.ok(verify().nonce);
  assert.ok(verify(token, request(), start + 1800000));
  for (const at of [start - 1, start + 2999, start + 1800001]) assert.throws(() => verify(token, request(), at));
  assert.throws(() => verify(token, request('GET', undefined, { 'x-forwarded-for': '203.0.113.10' })));
  for (const t of ['', 'broken', `${token}x`, token.replace(/^./, token[0] === 'a' ? 'b' : 'a'), token + '.extra']) assert.throws(() => verify(t));
  const localEnv = { ...env, VERCEL: undefined };
  const local = core.createContactHandlers({ env: localEnv, now: () => start });
  const localToken = (await (await local.GET(request())).json()).token;
  assert.ok(verify(localToken, request('GET', undefined, { 'x-forwarded-for': '192.0.2.100' }), start + 3000, localEnv));
  const missingIP = request(); missingIP.headers.delete('x-forwarded-for');
  assert.equal((await api.GET(missingIP)).status, 503);
  assert.equal((await api.GET(request('GET', undefined, { 'x-forwarded-for': 'not-an-ip' }))).status, 503);
  assert.equal((await api.GET(request('GET', undefined, { 'x-forwarded-for': '203.0.113.9, 192.0.2.1' }))).status, 200);
});
class MemoryStore {
  rows = new Map();
  conflicts = 0;
  async pause() { await new Promise(resolve => setImmediate(resolve)); }
  async get(partition, row) {
    await this.pause();
    const value = this.rows.get(`${partition}/${row}`);
    return value ? structuredClone(value) : null;
  }
  async insert(partition, row, entity) {
    await this.pause();
    const key = `${partition}/${row}`;
    if (this.rows.has(key)) { this.conflicts++; return false; }
    this.rows.set(key, { ...entity, etag: '1' });
    return true;
  }
  async replace(partition, row, entity, etag) {
    await this.pause();
    const key = `${partition}/${row}`;
    const old = this.rows.get(key);
    if (!old || old.etag !== etag) { this.conflicts++; return false; }
    this.rows.set(key, { ...entity, etag: String(Number(etag) + 1) });
    return true;
  }
}
test('atomic quota never overshoots under racing inserts/ETag updates and fails closed', async () => {
  assert.equal(typeof core.consumeQuota, 'function');
  const store = new MemoryStore();
  const results = await Promise.allSettled(Array.from({ length: 20 }, () => core.consumeQuota(store, 'day', 'ip-hour', 3, 2000000000000, 1800000000000)));
  assert.equal(results.filter(r => r.status === 'fulfilled').length, 3);
  assert.ok(results.filter(r => r.status === 'rejected').every(r => r.reason.status === 429 && r.reason.retryAfter > 0));
  assert.equal(store.rows.get('day/ip-hour').count, 3);
  assert.ok(store.conflicts > 0, 'actually exercised CAS conflicts');
  let attempts = 0;
  const conflicts = { get: async () => ({ count: 0, etag: 'e' }), replace: async () => { attempts++; return false; } };
  await assert.rejects(() => core.consumeQuota(conflicts, 'day', 'global', 30, 2000000000000, 1800000000000), { status: 503 });
  assert.ok(attempts > 1 && attempts <= 12);
  for (const count of [NaN, -1, 1.5, '2', undefined]) {
    await assert.rejects(() => core.consumeQuota({ get: async () => ({ count, etag: 'e' }) }, 'day', 'global', 30, 2000000000000, 1800000000000));
  }
  await assert.rejects(() => core.consumeQuota({ get: async () => { throw new Error('storage private error'); } }, 'day', 'global', 30, 2000000000000, 1800000000000));
});
test('Azure REST adapter uses conditional writes, authenticated bounded requests, and no transport retries', async () => {
  assert.equal(typeof core.createAzureStore, 'function');
  const calls = [];
  const responses = [new Response(null, { status: 404 }), new Response(null, { status: 204 }), new Response(null, { status: 409 }), Response.json({ count: 1, expiresAt: '2027-01-15T08:00:00.000Z' }, { headers: { etag: 'W/"real-etag"' } }), new Response(null, { status: 204 }), new Response(null, { status: 412 }), new Response('private storage failure', { status: 500 })];
  const store = core.createAzureStore(env, async (url, init) => { calls.push({ url, init }); return responses.shift(); });
  assert.equal(await store.get('day-1', 'ip-abc'), null);
  assert.equal(await store.insert('day-1', 'ip-abc', { count: 1, expiresAt: 1800000000000 }), true);
  assert.equal(await store.insert('day-1', 'ip-abc', { count: 1, expiresAt: 1800000000000 }), false);
  assert.equal((await store.get('day-1', 'ip-abc')).etag, 'W/"real-etag"');
  assert.equal(await store.replace('day-1', 'ip-abc', { count: 2, expiresAt: 1800000000000 }, 'W/"real-etag"'), true);
  assert.equal(await store.replace('day-1', 'ip-abc', { count: 2, expiresAt: 1800000000000 }, 'W/"real-etag"'), false);
  await assert.rejects(() => store.get('day-1', 'ip-abc'), { status: 503 });
  assert.equal(calls.length, 7);
  for (const call of calls) {
    assert.ok(call.url.startsWith(env.CONTACT_TABLE_URL));
    assert.equal(new URL(call.url).searchParams.get('sig'), 'test');
    assert.ok(call.init.signal instanceof AbortSignal);
    assert.equal(call.init.redirect, 'error');
    assert.equal(call.init.cache, 'no-store');
  }
  assert.equal(calls[4].init.headers['If-Match'], 'W/"real-etag"');
  assert.equal(calls[4].init.method, 'PUT');
  const entity = JSON.parse(calls[1].init.body);
  assert.equal(entity.PartitionKey, 'day-1');
  assert.equal(entity.RowKey, 'ip-abc');
  assert.equal(entity.count, 1);
  let count = 0;
  const failed = core.createAzureStore(env, async () => { count++; throw new Error('private credentials'); });
  await assert.rejects(() => failed.insert('day-1', 'token', { expiresAt: 1800000000000 }));
  assert.equal(count, 1);
  assert.throws(() => core.createAzureStore({ ...env, CONTACT_TABLE_URL: 'https://evil.test/ContactLimits' }));
});
test('challenge endpoint requires the exact enabled flag', async () => {
  for (const flag of [undefined, '', 'false', 'TRUE', '1']) {
    const api = core.createContactHandlers({ env: { ...env, CONTACT_FORM_ENABLED: flag } });
    assert.equal((await api.GET(request())).status, 503);
  }
});
test('Graph delivers text only with fixed sender/recipient, reply-to, and 15-second non-retrying requests', async (t) => {
  assert.equal(typeof core.sendContactMail, 'function');
  const calls = [];
  const timeouts = [];
  const realTimeout = AbortSignal.timeout.bind(AbortSignal);
  t.mock.method(AbortSignal, 'timeout', ms => { timeouts.push(ms); return realTimeout(ms); });
  const input = { name: '<Ada>', email: 'ada@example.com', message: '<script>alert(1)</script>\nHello' };
  await core.sendContactMail(env, input, async (url, init) => {
    calls.push({ url, init });
    return calls.length === 1 ? Response.json({ access_token: 'access' }) : new Response(null, { status: 202 });
  });
  assert.equal(calls.length, 2);
  assert.deepEqual(timeouts, [15000, 15000]);
  const auth = new URLSearchParams(calls[0].init.body);
  assert.equal(auth.get('grant_type'), 'client_credentials');
  assert.equal(auth.get('scope'), 'https://graph.microsoft.com/.default');
  assert.equal(auth.get('client_id'), env.CONTACT_CLIENT_ID);
  assert.equal(calls[1].url, 'https://graph.microsoft.com/v1.0/users/website@iyanbarry.com/sendMail');
  const mail = JSON.parse(calls[1].init.body);
  assert.equal(mail.message.body.contentType, 'Text');
  assert.ok(mail.message.body.content.includes(input.message));
  assert.deepEqual(mail.message.toRecipients, [{ emailAddress: { address: 'ask@iyanbarry.com' } }]);
  assert.deepEqual(mail.message.replyTo, [{ emailAddress: { address: input.email, name: input.name } }]);
  for (const c of calls) { assert.equal(c.init.method, 'POST'); assert.equal(c.init.redirect, 'error'); assert.equal(c.init.cache, 'no-store'); }
  for (const status of [200, 201, 400, 401, 403, 429, 500]) {
    let attempts = 0;
    await assert.rejects(() => core.sendContactMail(env, input, async () => ++attempts === 1 ? Response.json({ access_token: 'access' }) : new Response('private upstream', { status })), { status: 502 });
    assert.equal(attempts, 2);
  }
  for (const response of [new Response('private oauth', { status: 403 }), Response.json({}), new Response('malformed')]) {
    let attempts = 0;
    await assert.rejects(() => core.sendContactMail(env, input, async () => { attempts++; return response; }));
    assert.equal(attempts, 1);
  }
  t.mock.method(AbortSignal, 'timeout', () => realTimeout(5));
  let attempts = 0;
  await assert.rejects(() => core.sendContactMail(env, input, async (_url, init) => {
    attempts++;
    return new Promise((_resolve, reject) => {
      const keepAlive = setTimeout(() => reject(new Error('timeout did not abort')), 1000);
      init.signal.addEventListener('abort', () => { clearTimeout(keepAlive); reject(init.signal.reason); }, { once: true });
    });
  }));
  assert.equal(attempts, 1);
});
test('POST atomically claims a challenge once before sending; concurrent replays cannot send twice', async () => {
  const store = new MemoryStore();
  let clock = 1800000000000;
  let sends = 0;
  const api = core.createContactHandlers({ env, store, now: () => clock, fetcher: async url => {
    if (url.includes('login.microsoftonline.com')) return Response.json({ access_token: 'access' });
    assert.ok([...store.rows.keys()].some(k => k.includes('/nonce-')), 'claim persisted before send');
    sends++;
    return new Response(null, { status: 202 });
  } });
  assert.equal(typeof api.POST, 'function');
  const { token } = await (await api.GET(request())).json();
  clock += 3000;
  const input = { name: 'Ada', email: 'ada@example.com', message: 'Hello', website: '', challengeToken: token };
  const results = await Promise.all(Array.from({ length: 20 }, () => api.POST(request('POST', input))));
  assert.equal(results.filter(r => r.status === 200).length, 1);
  assert.equal(results.filter(r => [400, 429, 503].includes(r.status)).length, 19);
  assert.equal(sends, 1);
  for (const response of results) assert.equal(response.headers.get('cache-control'), 'no-store');
  assert.deepEqual(await results.find(r => r.status === 200).json(), { ok: true });
  const stored = JSON.stringify([...store.rows]);
  for (const pii of ['Ada', 'ada@example.com', 'Hello', '203.0.113.9', token]) assert.ok(!stored.includes(pii));
});
function fixture(overrides = {}) {
  const state = { clock: 1800000000000, sends: 0, store: new MemoryStore() };
  state.api = core.createContactHandlers({ env, store: state.store, now: () => state.clock, fetcher: async url => {
    if (url.includes('login.microsoftonline.com')) return Response.json({ access_token: 'access' });
    state.sends++;
    return new Response(null, { status: 202 });
  }, ...overrides });
  state.input = async (ip = '203.0.113.9') => {
    const challenge = await state.api.GET(request('GET', undefined, { 'x-forwarded-for': ip }));
    const { token } = await challenge.json();
    return { name: 'Ada', email: 'ada@example.com', message: 'Hello', website: '', challengeToken: token };
  };
  return state;
}
test('POST enforces persistent per-IP/hour and global/day caps before Graph, including concurrent traffic', async () => {
  const f = fixture();
  const inputs = await Promise.all(Array.from({ length: 20 }, () => f.input()));
  f.clock += 3000;
  const responses = await Promise.all(inputs.map(input => f.api.POST(request('POST', input))));
  assert.equal(responses.filter(r => r.status === 200).length, 3);
  assert.equal(f.sends, 3);
  for (const limited of responses.filter(r => r.status !== 200)) {
    assert.ok([429, 503].includes(limited.status));
    if (limited.status === 429) assert.ok(Number(limited.headers.get('retry-after')) > 0);
    assert.equal(limited.headers.get('cache-control'), 'no-store');
  }
  const global = fixture();
  for (let batch = 0; batch < 6; batch++) {
    const ips = Array.from({ length: 5 }, (_, n) => `192.0.2.${batch * 5 + n + 1}`);
    const inputs = await Promise.all(ips.map(ip => global.input(ip)));
    global.clock += 3000;
    const responses = await Promise.all(inputs.map((input, n) => global.api.POST(request('POST', input, { 'x-forwarded-for': ips[n] }))));
    assert.ok(responses.every(r => r.status === 200));
  }
  const last = await global.input('192.0.2.100'); global.clock += 3000;
  const before = JSON.stringify([...global.store.rows]);
  const limited = await global.api.POST(request('POST', last, { 'x-forwarded-for': '192.0.2.100' }));
  assert.equal(JSON.stringify([...global.store.rows]), before, 'exhausted global cap must prevent ALL new nonce/IP rows and writes');
  assert.equal(limited.status, 429);
  assert.ok(Number(limited.headers.get('retry-after')) > 0);
  assert.equal(global.sends, 30);
});
test('POST failures never report success, disclose upstream detail, or call Graph before every guard passes', async () => {
  for (const key of Object.keys(env).filter(k => k.startsWith('CONTACT_'))) {
    const f = fixture({ env: { ...env, [key]: '' } });
    const response = await f.api.POST(request('POST', {}));
    assert.equal(response.status, 503, key);
    assert.equal(f.sends, 0);
  }
  for (const origin of ['https://evil.test', 'https://iyanbarry.com.evil.test', 'http://localhost:3000', 'null', '']) {
    const f = fixture(); const input = await f.input(); f.clock += 3000;
    const req = request('POST', input, { origin });
    if (!origin) req.headers.delete('origin');
    assert.equal((await f.api.POST(req)).status, 403, origin);
    assert.equal(f.store.rows.size, 0);
    assert.equal(f.sends, 0);
  }
  for (const [change, age, status] of [[{ website: 'bot' }, 3000, 400], [{ name: 'bad\nname' }, 3000, 400], [{ message: 'x'.repeat(5001) }, 3000, 400], [{ message: 'x'.repeat(17000) }, 3000, 413], [{ challengeToken: 'broken' }, 3000, 400], [{}, 2999, 400], [{}, 1800001, 400]]) {
    const f = fixture(); const input = await f.input(); f.clock += age;
    const response = await f.api.POST(request('POST', { ...input, ...change }));
    assert.equal(response.status, status);
    assert.equal(response.headers.get('cache-control'), 'no-store');
    assert.equal(f.store.rows.size, 0);
    assert.equal(f.sends, 0);
  }
  for (const method of ['insert', 'get', 'replace']) {
    const f = fixture();
    // A successful first attempt establishes the update path for the replace failure.
    const first = await f.input(); f.clock += 3000;
    assert.equal((await f.api.POST(request('POST', first))).status, 200);
    f.store[method] = async () => { throw new Error('secret ada@example.com'); };
    const input = await f.input(); f.clock += 3000;
    const response = await f.api.POST(request('POST', input));
    assert.equal(response.status, 503);
    assert.equal(f.sends, 1);
    assert.ok(!(await response.text()).includes('secret'));
  }
  for (const status of [200, 403, 429, 500, 'throw']) {
    let sends = 0;
    const f = fixture({ fetcher: async url => {
      if (url.includes('login.microsoftonline.com')) return Response.json({ access_token: 'access' });
      sends++;
      if (status === 'throw') throw new Error('secret ada@example.com');
      return new Response('secret ada@example.com', { status });
    } });
    const input = await f.input(); f.clock += 3000;
    const response = await f.api.POST(request('POST', input));
    assert.ok([502, 503].includes(response.status));
    assert.equal(response.headers.get('cache-control'), 'no-store');
    assert.ok(!(await response.text()).includes('secret'));
    assert.equal((await f.api.POST(request('POST', input))).status, 400, 'failed send still consumes token');
    assert.equal(sends, 1);
  }
});
test('Next route is Node/dynamic, fails closed by default, and never caches unsupported responses', async () => {
  assert.equal(existsSync('app/api/contact/route.ts'), true);
  const routeOut = join(out, 'route');
  execFileSync(process.execPath, ['node_modules/typescript/bin/tsc', 'app/api/contact/route.ts', '--outDir', routeOut, '--target', 'es2022', '--module', 'commonjs', '--lib', 'es2022,dom', '--esModuleInterop', '--strict', '--skipLibCheck'], { stdio: 'inherit' });
  const route = createRequire(import.meta.url)(join(routeOut, 'app/api/contact/route.js'));
  assert.equal(route.runtime, 'nodejs');
  assert.equal(route.dynamic, 'force-dynamic');
  const previous = process.env.CONTACT_FORM_ENABLED;
  delete process.env.CONTACT_FORM_ENABLED;
  try {
    for (const method of ['GET', 'POST']) {
      const response = await route[method](request(method, method === 'POST' ? {} : undefined));
      assert.equal(response.status, 503);
      assert.equal(response.headers.get('cache-control'), 'no-store');
    }
    for (const method of ['HEAD', 'OPTIONS', 'PUT', 'PATCH', 'DELETE']) {
      const response = await route[method]();
      assert.equal(response.status, 405);
      assert.equal(response.headers.get('cache-control'), 'no-store');
    }
  } finally {
    if (previous === undefined) delete process.env.CONTACT_FORM_ENABLED;
    else process.env.CONTACT_FORM_ENABLED = previous;
  }
});
const env = { CONTACT_FORM_ENABLED: 'true', CONTACT_TENANT_ID: 'tenant', CONTACT_CLIENT_ID: 'client', CONTACT_CLIENT_SECRET: 'secret', CONTACT_TABLE_URL: 'https://iyanbarrycontact.table.core.windows.net/ContactLimits', CONTACT_TABLE_SAS: 'sv=test&sig=test', CONTACT_SIGNING_SECRET: 'a'.repeat(64), VERCEL: '1' };
const request = (method = 'GET', body, extra = {}) => new Request('https://iyanbarry.com/api/contact', { method, headers: { origin: 'https://iyanbarry.com', 'x-forwarded-for': '203.0.113.9', ...(body !== undefined ? { 'content-type': 'application/json' } : {}), ...extra }, ...(body !== undefined ? { body: JSON.stringify(body) } : {}) });

test('GET returns a fresh signed no-store challenge without submitted PII', async () => {
  assert.equal(typeof core.createContactHandlers, 'function');
  const api = core.createContactHandlers({ env, now: () => 1800000000000 });
  const a = await api.GET(request());
  assert.equal(a.status, 200);
  assert.equal(a.headers.get('cache-control'), 'no-store');
  const { token } = await a.json();
  assert.match(token, /^[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+$/);
  assert.notEqual(token, (await (await api.GET(request())).json()).token);
  assert.ok(!Buffer.from(token.split('.')[0], 'base64url').toString().includes('203.0.113.9'));
});
