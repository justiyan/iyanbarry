import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { createRequire } from 'node:module'
import ts from 'typescript'

const require = createRequire(import.meta.url)
const ContactForm = () => null
const EmailOptions = () => null
function descendants(tree) {
  if (!tree || typeof tree !== 'object') return []
  if (Array.isArray(tree)) return tree.flatMap(descendants)
  return [tree, ...descendants(tree.props?.children)]
}
for (const flag of [undefined, 'false', 'true']) {
  test(`contact page enables the form only with explicit true (flag=${flag})`, () => {
    const source = ts.transpileModule(readFileSync(new URL('../app/contact/page.tsx', import.meta.url), 'utf8'), {
      compilerOptions: { jsx: ts.JsxEmit.ReactJSX, module: ts.ModuleKind.CommonJS },
    }).outputText
    const module = { exports: {} }
    const dependencies = name => {
      if (name === '@/components/ContactForm') return { default: ContactForm, EmailOptions }
      if (name === '@/components/Layout') return { default: 'main' }
      if (name === '@/components/ui') return { Shell: 'section', Section: 'section', SectionHead: 'h2' }
      return require(name)
    }
    new Function('require', 'module', 'exports', 'process', source)(dependencies, module, module.exports, { env: { CONTACT_FORM_ENABLED: flag } })
    const tree = descendants(module.exports.default())
    assert.equal(tree.some(node => node.type === ContactForm), flag === 'true')
    assert.equal(tree.some(node => node.type === EmailOptions), flag !== 'true')
  })
}
