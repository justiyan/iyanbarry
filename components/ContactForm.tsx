'use client'

import { useCallback, useEffect, useRef, useState, type FormEvent } from 'react'

const email = 'ask@iyanbarry.com'
const fieldClass = 'mt-s2 w-full rounded-btn border border-hairline-strong bg-white px-s3 py-3 text-[16px] text-ink focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent-soft disabled:bg-surface-2'
const secondaryButtonClass = 'rounded-btn border border-hairline px-s4 py-3 text-[14.5px] font-medium transition-colors hover:border-ink-3 hover:bg-surface-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent'

async function contactRequest(options: RequestInit, timeoutMs: number) {
  const controller = new AbortController()
  let timer: ReturnType<typeof setTimeout> | undefined
  const timeout = new Promise<never>((_, reject) => {
    timer = setTimeout(() => {
      reject(new Error(options.method === 'POST'
        ? 'The request timed out. Your enquiry may have been submitted; it has not been sent again automatically.'
        : 'The security check timed out.'))
      controller.abort()
    }, timeoutMs)
  })
  try {
    return await Promise.race([
      fetch('/api/contact', { ...options, signal: controller.signal }).then(async response => ({
        response,
        data: options.method === 'GET' || !response.ok ? await response.json().catch(() => null) : null,
      })),
      timeout,
    ])
  } finally {
    clearTimeout(timer)
  }
}

async function requestChallenge(): Promise<string> {
  const { response, data } = await contactRequest({ method: 'GET', cache: 'no-store' }, 10000)
  if (!response.ok || typeof data?.token !== 'string' || !data.token.trim()) throw new Error('Challenge unavailable')
  return data.token
}

export function EmailOptions() {
  const [copyStatus, setCopyStatus] = useState('')

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email)
      setCopyStatus('Email address copied.')
    } catch {
      setCopyStatus('Automatic copying is unavailable. Select the email address above and copy it manually.')
    }
  }

  return (
    <div>
      <p className="text-[16px] text-ink-2"><span className="select-all">{email}</span></p>
      <div className="mt-s3 flex flex-wrap gap-s3">
        <button type="button" onClick={copyEmail} className={secondaryButtonClass}>Copy email address</button>
        <a href={`mailto:${email}`} className={secondaryButtonClass}>Open your email app</a>
      </div>
      <p role="status" aria-live="polite" aria-atomic="true" className="mt-s2 text-[14px] text-ink-2">{copyStatus}</p>
    </div>
  )
}

export default function ContactForm() {
  const [challengeToken, setChallengeToken] = useState('')
  const [fields, setFields] = useState({ name: '', email: '', message: '', website: '' })
  const [status, setStatus] = useState('')
  const [pending, setPending] = useState(false)
  const [challengeError, setChallengeError] = useState(false)
  const [loadingChallenge, setLoadingChallenge] = useState(true)
  const [challengeReady, setChallengeReady] = useState(false)
  const sending = useRef(false)
  const readyAt = useRef(Infinity)
  const readyTimer = useRef<ReturnType<typeof setTimeout>>()
  const expiresAt = useRef(0)
  const refreshing = useRef(false)
  const requestVersion = useRef(0)

  const refreshChallenge = useCallback(async () => {
    if (refreshing.current) return
    refreshing.current = true
    const version = ++requestVersion.current
    clearTimeout(readyTimer.current)
    setChallengeReady(false)
    readyAt.current = Infinity
    setChallengeToken('')
    setChallengeError(false)
    setLoadingChallenge(true)
    try {
      const token = await requestChallenge()
      if (version !== requestVersion.current) return
      setChallengeToken(token)
      readyAt.current = Date.now() + 3000
      // Refresh conservatively before the server's 30-minute expiry.
      expiresAt.current = Date.now() + 29 * 60 * 1000
      readyTimer.current = setTimeout(() => setChallengeReady(true), 3000)
    } catch {
      if (version === requestVersion.current) setChallengeError(true)
    } finally {
      if (version === requestVersion.current) {
        refreshing.current = false
        setLoadingChallenge(false)
      }
    }
  }, [])

  useEffect(() => {
    const versionRef = requestVersion
    void refreshChallenge()
    const refreshStale = () => {
      if (document.visibilityState === 'visible' && !sending.current && Date.now() >= expiresAt.current) void refreshChallenge()
    }
    window.addEventListener('focus', refreshStale)
    document.addEventListener('visibilitychange', refreshStale)
    return () => {
      versionRef.current++
      refreshing.current = false
      clearTimeout(readyTimer.current)
      window.removeEventListener('focus', refreshStale)
      document.removeEventListener('visibilitychange', refreshStale)
    }
  }, [refreshChallenge])

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (sending.current || !challengeToken || Date.now() < readyAt.current) return
    if (Date.now() >= expiresAt.current) {
      setStatus('Refreshing the security check. Please wait a few seconds, then select Send enquiry again. Your text is still here.')
      await refreshChallenge()
      return
    }
    sending.current = true
    setPending(true)
    setStatus('Sending your enquiry…')
    try {
      const { response, data } = await contactRequest({
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...fields, challengeToken }),
      }, 45000)
      if (!response.ok) throw new Error(typeof data?.error === 'string' ? data.error : 'The form could not submit your enquiry.')
      setStatus('Your enquiry has been submitted. Thanks for getting in touch.')
      setFields({ name: '', email: '', message: '', website: '' })
    } catch (error) {
      const detail = error instanceof Error ? error.message : 'We could not confirm your enquiry was submitted.'
      setStatus(`${detail} Your text is still here. You can email ${email} instead using the options below.`)
    } finally {
      await refreshChallenge()
      sending.current = false
      setPending(false)
    }
  }

  return (
    <div className="max-w-[680px]">
      <form onSubmit={submit} aria-describedby="contact-privacy" className="space-y-s4">
        <div>
          <label htmlFor="contact-name" className="text-[14.5px] font-medium">Name</label>
          <input id="contact-name" name="name" disabled={pending} value={fields.name} onChange={event => setFields({ ...fields, name: event.target.value })} autoComplete="name" required maxLength={100} className={fieldClass} />
        </div>
        <div>
          <label htmlFor="contact-email" className="text-[14.5px] font-medium">Email</label>
          <input id="contact-email" name="email" type="email" disabled={pending} value={fields.email} onChange={event => setFields({ ...fields, email: event.target.value })} autoComplete="email" required maxLength={254} className={fieldClass} />
        </div>
        <div>
          <label htmlFor="contact-message" className="text-[14.5px] font-medium">Message</label>
          <textarea id="contact-message" name="message" aria-describedby="contact-sensitive" disabled={pending} value={fields.message} onChange={event => setFields({ ...fields, message: event.target.value })} required maxLength={5000} rows={7} className={`${fieldClass} resize-y`} />
          <p id="contact-sensitive" className="mt-s2 text-[14px] leading-relaxed text-ink-2">Please don’t include sensitive or confidential information.</p>
        </div>
        <div hidden aria-hidden="true">
          <label htmlFor="contact-website">Leave this field empty</label>
          <input id="contact-website" name="website" disabled={pending} value={fields.website} onChange={event => setFields({ ...fields, website: event.target.value })} tabIndex={-1} autoComplete="off" />
        </div>
        <p id="contact-privacy" className="text-[14px] leading-relaxed text-ink-2">Your enquiry is sent securely to Microsoft 365 so I can respond to your enquiry. This is not a marketing signup.</p>
        <button type="submit" disabled={pending || !challengeToken || !challengeReady} className="rounded-btn bg-ink px-s4 py-3 text-[14.5px] font-medium text-white transition-colors hover:bg-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent disabled:cursor-not-allowed disabled:opacity-60">Send enquiry</button>
        <p role="status" aria-live="polite" aria-atomic="true" className="text-[14.5px] leading-relaxed text-ink-2">{status}</p>
        <div aria-live="polite" className="text-[14px] leading-relaxed text-ink-2">
          {(loadingChallenge || (!challengeReady && !challengeError)) && <p>Preparing the form’s security check. This takes a few seconds…</p>}
          {challengeError && (
            <div className="space-y-s2">
              <p>The form’s security check is unavailable. Try loading it again, or email {email} using the options below.</p>
              <button type="button" onClick={refreshChallenge} disabled={pending || loadingChallenge} className="font-medium text-accent underline underline-offset-4">Try loading the form again</button>
            </div>
          )}
        </div>
      </form>
      <div className="mt-s5 border-t border-hairline pt-s4">
        <h2 className="mb-s2 text-[16px] font-semibold">Prefer email?</h2>
        <EmailOptions />
      </div>
    </div>
  )
}
