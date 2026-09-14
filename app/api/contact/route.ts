import { createContactHandlers } from '../../../lib/contact-server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const maxDuration = 60;

const handlers = createContactHandlers();
export const GET = handlers.GET;
export const POST = handlers.POST;

function methodNotAllowed() {
  return new Response(null, { status: 405, headers: { 'Cache-Control': 'no-store', Allow: 'GET, POST' } });
}
export const HEAD = methodNotAllowed;
export const OPTIONS = methodNotAllowed;
export const PUT = methodNotAllowed;
export const PATCH = methodNotAllowed;
export const DELETE = methodNotAllowed;
