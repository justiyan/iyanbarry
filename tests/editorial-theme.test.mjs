import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync, existsSync } from 'node:fs'
const read=p=>readFileSync(new URL('../'+p,import.meta.url),'utf8')
test('shared editorial shell keeps accessible navigation and a reliable contact route',()=>{
 const header=read('components/Header.tsx'),footer=read('components/Footer.tsx'),layout=read('components/Layout.tsx')
 assert.ok(header.includes('site-header')&&header.includes('aria-expanded={open}')&&header.includes('aria-controls="mobile-navigation"'))
 assert.ok(header.includes("Escape")&&header.includes('aria-current'))
 assert.ok(footer.includes('site-footer')&&footer.includes('href="/contact"'))
 assert.ok(layout.includes('id="main-content"')&&header.includes('href="#main-content"'))
 assert.ok(read('components/ui.tsx').includes('editorial-card'))
})
test('homepage adopts approved composition without losing routes, capabilities or real publication dates',()=>{
 const home=read('app/page.tsx')
 for(const value of ['home-hero','editorial-portrait','home-split','home-service','home-focus','home-writing-top','home-speaking','getSortedPostsData','PostDate','/work-with-me#internal-ai-platforms'])assert.ok(home.includes(value),value)
 assert.doesNotMatch(home,/bg-white|fake|testimonial/i)
})
test('contact styling uses parchment fields without altering delivery controls',()=>{
 const form=read('components/ContactForm.tsx')
 assert.ok(form.includes('contact-form')&&form.includes('bg-surface'))
 assert.doesNotMatch(form,/bg-white/)
})
test('form input boundaries use the accessible darker sage token',()=>{
 assert.ok(read('app/globals.css').includes('border-color:#788b80'))
 assert.ok(read('tailwind.config.js').includes("strong:'#788b80'"))
})
test('approved teal editorial palette and local display/body fonts are shared across the site',()=>{
 const css=read('app/globals.css'),config=read('tailwind.config.js')
 for(const token of ['#f4f2e9','#203b39','#24645c','#e1e7db'])assert.ok(css.includes(token),token)
 assert.ok(css.includes('Fraunces')&&css.includes('DM Sans'))
 assert.doesNotMatch(css,/fonts.googleapis.com/)
 assert.ok(config.includes('var(--ink)')&&config.includes('var(--accent)'))
 assert.ok(existsSync(new URL('../public/fonts/fraunces-latin.woff2',import.meta.url)))
})
