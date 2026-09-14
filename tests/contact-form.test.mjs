import test from 'node:test'
import assert from 'node:assert/strict'
import { existsSync, readFileSync } from 'node:fs'
import { createRequire } from 'node:module'
import ts from 'typescript'
import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'

const require = createRequire(import.meta.url)
const componentPath = new URL('../components/ContactForm.tsx', import.meta.url)

// No DOM/testing dependencies are installed. Exercise the real component's
// handlers and JSX using a minimal state/effect host; only React's hook host and
// browser I/O are substituted. This is not a browser/layout test.
function mount(exportName = 'default') {
  const slots = []
  let now = 0, timerId = 0
  const timers = new Map()
  const clockSetTimeout = (callback, delay) => { const id = ++timerId; timers.set(id, { at: now + delay, callback }); return id }
  const clockClearTimeout = id => timers.delete(id)
  const advance = milliseconds => {
    const end = now + milliseconds
    while (true) {
      const next = [...timers.entries()].filter(([, timer]) => timer.at <= end).sort((a, b) => a[1].at - b[1].at)[0]
      if (!next) break
      timers.delete(next[0]); now = next[1].at; next[1].callback()
    }
    now = end
  }
  const window = new EventTarget()
  const document = Object.assign(new EventTarget(), { visibilityState: 'visible' })
  let cursor = 0
  const effects = []
  const hooks = {
    ...React,
    useCallback(callback) { return callback },
    useState(initial) {
      const index = cursor++
      if (!(index in slots)) slots[index] = typeof initial === 'function' ? initial() : initial
      return [slots[index], value => { slots[index] = typeof value === 'function' ? value(slots[index]) : value }]
    },
    useRef(initial) {
      const index = cursor++
      if (!(index in slots)) slots[index] = { current: initial }
      return slots[index]
    },
    useEffect(callback, deps) {
      const index = cursor++
      if (!(index in slots) || deps?.some((value, i) => value !== slots[index]?.[i])) effects.push(callback)
      slots[index] = deps
    },
  }
  let Component = () => null
  if (existsSync(componentPath)) {
    const source = ts.transpileModule(readFileSync(componentPath, 'utf8'), {
      compilerOptions: { jsx: ts.JsxEmit.ReactJSX, module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
    }).outputText
    const module = { exports: {} }
    new Function('require', 'module', 'exports', 'setTimeout', 'clearTimeout', 'Date', 'window', 'document', source)(name => name === 'react' ? hooks : require(name), module, module.exports, clockSetTimeout, clockClearTimeout, { now: () => now }, window, document)
    Component = module.exports[exportName] || (() => null)
  }
  const render = () => { cursor = 0; return Component() }
  const initial = render()
  const cleanups = effects.splice(0).map(effect => effect()).filter(Boolean)
  return { render, initial, advance, window, document, cleanup: () => cleanups.forEach(cleanup => cleanup()) }
}

function all(tree, predicate) {
  if (!tree || typeof tree !== 'object') return []
  if (Array.isArray(tree)) return tree.flatMap(child => all(child, predicate))
  return [...(predicate(tree) ? [tree] : []), ...all(tree.props?.children, predicate)]
}
function element(ui, type, name) {
  const found = all(ui.render(), node => node.type === type && (!name || node.props.name === name))[0]
  assert.ok(found, `Expected ${type}${name ? ` named ${name}` : ''}`)
  return found
}
const html = ui => renderToStaticMarkup(ui.render())
const settle = () => new Promise(resolve => setImmediate(resolve))
const ready = async ui => { await settle(); ui.advance(3000); await settle() }

function fill(ui, values = { name: 'Alex Example', email: 'alex@example.com', message: 'I would like to discuss a project.', website: '' }) {
  for (const [name, value] of Object.entries(values)) {
    const field = element(ui, name === 'message' ? 'textarea' : 'input', name)
    assert.equal(typeof field.props.onChange, 'function', `${name} must accept typed text`)
    field.props.onChange({ target: { value } })
  }
  return values
}
const submit = ui => element(ui, 'form').props.onSubmit({ preventDefault() {} })

test('submits the enquiry as JSON with its challenge and refreshes after success', async () => {
  const calls = []
  globalThis.fetch = async (url, options) => {
    calls.push({ url, ...options })
    return { ok: true, json: async () => options.method === 'GET' ? { token: `token-${calls.length}` } : { ok: true } }
  }
  const ui = mount()
  await ready(ui)
  const values = fill(ui)
  await submit(ui)
  assert.deepEqual(calls.map(call => call.method), ['GET', 'POST', 'GET'])
  assert.equal(calls[1].url, '/api/contact')
  assert.equal(calls[1].headers['Content-Type'], 'application/json')
  assert.deepEqual(JSON.parse(calls[1].body), { ...values, challengeToken: 'token-1' })
  assert.match(html(ui), /Your enquiry has been submitted\. Thanks for getting in touch\./)
  for (const name of Object.keys(values)) assert.equal(element(ui, name === 'message' ? 'textarea' : 'input', name).props.value, '')
  ui.cleanup()
})

test('locks fields and blocks duplicate sends until the send and refresh finish', async () => {
  const calls = []
  let finishSend, finishRefresh
  globalThis.fetch = async (url, options) => {
    calls.push(options.method)
    if (options.method === 'POST') return new Promise(resolve => { finishSend = resolve })
    if (calls.length > 1) return new Promise(resolve => { finishRefresh = resolve })
    return { ok: true, json: async () => ({ token: 'initial-token' }) }
  }
  const ui = mount()
  await ready(ui)
  fill(ui)
  const send = element(ui, 'form').props.onSubmit
  const pending = send({ preventDefault() {} })
  assert.equal(element(ui, 'button').props.disabled, true)
  for (const field of all(ui.render(), node => ['input', 'textarea'].includes(node.type))) assert.equal(field.props.disabled, true)
  assert.match(html(ui), /Sending/)
  await send({ preventDefault() {} })
  assert.deepEqual(calls, ['GET', 'POST'])
  finishSend({ ok: true })
  await settle()
  assert.equal(element(ui, 'button').props.disabled, true)
  finishRefresh({ ok: true, json: async () => ({ token: 'new-token' }) })
  await pending
  await ready(ui)
  assert.equal(element(ui, 'button').props.disabled, false)
  ui.cleanup()
})

for (const failure of ['backend', 'network', 'non-json']) {
  test(`preserves text with an actionable email fallback on ${failure} failure, without retrying`, async () => {
    const calls = []
    globalThis.fetch = async (url, options) => {
      calls.push(options)
      if (options.method === 'GET') return { ok: true, json: async () => ({ token: `token-${calls.length}` }) }
      if (failure === 'network') throw new Error('offline')
      return { ok: false, json: async () => {
        if (failure === 'non-json') throw new Error('Invalid JSON')
        return { error: 'Please wait before sending another enquiry.' }
      } }
    }
    const ui = mount()
    await ready(ui)
    const values = fill(ui)
    await assert.doesNotReject(() => submit(ui))
    for (const [name, value] of Object.entries(values)) assert.equal(element(ui, name === 'message' ? 'textarea' : 'input', name).props.value, value)
    assert.deepEqual(calls.map(call => call.method), ['GET', 'POST', 'GET'])
    assert.doesNotMatch(html(ui), /Your enquiry has been submitted/)
    assert.match(html(ui), /ask@iyanbarry\.com/)
    assert.match(html(ui), /email/i)
    if (failure === 'backend') assert.match(html(ui), /Please wait before sending another enquiry\./)
    await ready(ui)
  assert.equal(element(ui, 'button').props.disabled, false)
    await settle()
    assert.equal(calls.length, 3)
    ui.cleanup()
  })
}

test('keeps send unavailable when challenge loading fails and offers an explicit reload', async () => {
  const calls = []
  globalThis.fetch = async (url, options) => {
    calls.push(options.method)
    return { ok: calls.length > 1, json: async () => ({ token: 'token-value' }) }
  }
  const ui = mount()
  await ready(ui)
  assert.equal(element(ui, 'button').props.disabled, true)
  assert.match(html(ui), /security check.*unavailable/i)
  assert.match(html(ui), /ask@iyanbarry\.com/)
  await submit(ui)
  assert.deepEqual(calls, ['GET'])
  const retry = all(ui.render(), node => node.type === 'button' && node.props.type === 'button' && /Try loading/.test(node.props.children))[0]
  assert.ok(retry, 'Offer an explicit challenge reload without sending')
  await retry.props.onClick()
  assert.deepEqual(calls, ['GET', 'GET'])
  await ready(ui)
  assert.equal(element(ui, 'button').props.disabled, false)
  ui.cleanup()
})

test('does not turn a successful submission into failure when challenge refresh fails', async () => {
  const calls = []
  globalThis.fetch = async (url, options) => {
    calls.push(options.method)
    if (calls.length === 3) throw new Error('offline')
    return { ok: true, json: async () => ({ token: 'test-token' }) }
  }
  const ui = mount()
  await ready(ui)
  fill(ui)
  await assert.doesNotReject(() => submit(ui))
  assert.match(html(ui), /Your enquiry has been submitted\. Thanks for getting in touch\./)
  assert.match(html(ui), /security check.*unavailable/i)
  assert.equal(element(ui, 'button').props.disabled, true)
  assert.equal(element(ui, 'input', 'name').props.disabled, false)
  assert.deepEqual(calls, ['GET', 'POST', 'GET'])
  ui.cleanup()
})

for (const token of [undefined, '', '   ', 123, {}]) {
  test(`rejects a malformed challenge token: ${JSON.stringify(token)}`, async () => {
    globalThis.fetch = async () => ({ ok: true, json: async () => ({ token }) })
    const ui = mount()
    await ready(ui)
    assert.equal(element(ui, 'button').props.disabled, true)
    assert.match(html(ui), /security check.*unavailable/i)
    ui.cleanup()
  })
}

test('offers copy-email and an explicitly labelled mail-app link', async () => {
  const copied = []
  Object.defineProperty(globalThis, 'navigator', { configurable: true, value: { clipboard: { writeText: async text => { copied.push(text) } } } })
  const ui = mount('EmailOptions')
  const copy = all(ui.render(), node => node.type === 'button' && node.props.children === 'Copy email address')[0]
  assert.ok(copy, 'Expected a Copy email address button')
  assert.equal(copy.props.type, 'button')
  await copy.props.onClick()
  assert.deepEqual(copied, ['ask@iyanbarry.com'])
  assert.match(html(ui), /Email address copied/)
  const link = all(ui.render(), node => node.type === 'a' && node.props.href === 'mailto:ask@iyanbarry.com')[0]
  assert.equal(link?.props.children, 'Open your email app')
  assert.match(html(ui), /select-all[^>]*>ask@iyanbarry\.com/)
  ui.cleanup()
})

for (const clipboard of [undefined, { writeText: async () => { throw new Error('Permission denied') } }]) {
  test(`keeps the email address selectable when clipboard is ${clipboard ? 'denied' : 'unavailable'}`, async () => {
    Object.defineProperty(globalThis, 'navigator', { configurable: true, value: { clipboard } })
    const ui = mount('EmailOptions')
    const copy = all(ui.render(), node => node.type === 'button' && node.props.children === 'Copy email address')[0]
    await assert.doesNotReject(() => copy.props.onClick())
    assert.match(html(ui), /select.*address.*copy.*manually/i)
    assert.match(html(ui), /select-all[^>]*>ask@iyanbarry\.com/)
    assert.doesNotMatch(html(ui), /Email address copied/)
    ui.cleanup()
  })
}

test('waits three seconds after acquiring every challenge and refuses early submission', async () => {
  const calls = []
  globalThis.fetch = async (url, options) => { calls.push(options.method); return { ok: true, json: async () => ({ token: 'age-token' }) } }
  const ui = mount()
  await settle()
  fill(ui)
  assert.equal(element(ui, 'button').props.disabled, true)
  await submit(ui)
  assert.deepEqual(calls, ['GET'])
  ui.advance(2999)
  assert.equal(element(ui, 'button').props.disabled, true)
  ui.advance(1)
  assert.equal(element(ui, 'button').props.disabled, false)
  await submit(ui)
  assert.deepEqual(calls, ['GET', 'POST', 'GET'])
  assert.equal(element(ui, 'button').props.disabled, true)
  ui.advance(3000)
  assert.equal(element(ui, 'button').props.disabled, false)
  ui.cleanup()
})

for (const trigger of ['focus', 'visibilitychange', 'submit']) {
  test(`refreshes stale challenges on ${trigger} without automatically sending`, async () => {
    const calls = []
    globalThis.fetch = async (url, options) => { calls.push(options); return { ok: true, json: async () => ({ token: `token-${calls.length}` }) } }
    const ui = mount()
    await ready(ui)
    fill(ui)
    ui.advance(30 * 60 * 1000)
    if (trigger === 'submit') await submit(ui)
    else (trigger === 'focus' ? ui.window : ui.document).dispatchEvent(new Event(trigger))
    await settle()
    assert.deepEqual(calls.map(call => call.method), ['GET', 'GET'])
    assert.equal(element(ui, 'button').props.disabled, true)
    await submit(ui)
    assert.equal(calls.length, 2)
    await ready(ui)
    await submit(ui)
    assert.equal(JSON.parse(calls[2].body).challengeToken, 'token-2')
    ui.cleanup()
  })
}

test('times out challenge requests after ten seconds', async () => {
  let signal
  globalThis.fetch = async (url, options) => { signal = options.signal; return new Promise(() => {}) }
  const ui = mount()
  ui.advance(10000)
  await settle()
  assert.match(html(ui), /security check.*unavailable/i)
  assert.equal(signal?.aborted, true)
  ui.cleanup()
})

test('times out a send after forty-five seconds, retaining text and refreshing without retry', async () => {
  const calls = []
  globalThis.fetch = async (url, options) => {
    calls.push(options)
    if (options.method === 'POST') return new Promise(() => {})
    return { ok: true, json: async () => ({ token: 'timeout-token' }) }
  }
  const ui = mount()
  await ready(ui)
  const values = fill(ui)
  const result = submit(ui)
  ui.advance(44999)
  await settle()
  assert.equal(element(ui, 'input', 'name').props.disabled, true)
  ui.advance(1)
  await settle()
  assert.match(html(ui), /timed out.*may have been submitted/i)
  await result
  assert.equal(calls[1].signal?.aborted, true)
  assert.equal(element(ui, 'input', 'name').props.value, values.name)
  assert.deepEqual(calls.map(call => call.method), ['GET', 'POST', 'GET'])
  ui.cleanup()
})

test('explains Microsoft 365 enquiry handling and warns against sensitive information', () => {
  const ui = mount()
  assert.match(html(ui), /sent securely to Microsoft 365/)
  assert.match(html(ui), /respond to your enquiry/)
  assert.match(html(ui), /not.*marketing/i)
  assert.match(html(ui), /sensitive or confidential information/i)
  ui.cleanup()
})

// Tests deliberately run sequentially because fetch/navigator are browser globals.
const originalFetch = globalThis.fetch
const originalNavigator = Object.getOwnPropertyDescriptor(globalThis, 'navigator')
test.beforeEach(() => { globalThis.fetch = async () => ({ ok: true, json: async () => ({ token: 'test-challenge' }) }) })
test.afterEach(() => {
  globalThis.fetch = originalFetch
  if (originalNavigator) Object.defineProperty(globalThis, 'navigator', originalNavigator)
  else delete globalThis.navigator
})
test('renders a labelled enquiry form with native required and length constraints', () => {
  const ui = mount()
  const output = html(ui)
  for (const [name, type, limit] of [['name', 'input', 100], ['email', 'input', 254], ['message', 'textarea', 5000]]) {
    const field = element(ui, type, name)
    assert.equal(field.props.required, true)
    assert.equal(field.props.maxLength, limit)
    assert.match(output, new RegExp(`<label[^>]*for="${field.props.id}"`))
  }
  assert.equal(element(ui, 'input', 'email').props.type, 'email')
  const trap = element(ui, 'input', 'website')
  assert.equal(trap.props.required, undefined)
  assert.equal(trap.props.tabIndex, -1)
  assert.match(output, /aria-live="polite"/)
  ui.cleanup()
})

test('requests a fresh challenge on mount and waits before enabling send', async () => {
  const calls = []
  let respond
  globalThis.fetch = (...args) => { calls.push(args); return new Promise(resolve => { respond = resolve }) }
  const ui = mount()
  assert.equal(calls.length, 1)
  assert.equal(calls[0][0], '/api/contact')
  assert.equal(calls[0][1].method, 'GET')
  assert.equal(calls[0][1].cache, 'no-store')
  assert.equal(element(ui, 'button').props.disabled, true)
  respond({ ok: true, json: async () => ({ token: 'fresh-token' }) })
  await settle()
  await ready(ui)
  assert.equal(element(ui, 'button').props.disabled, false)
  ui.cleanup()
})

