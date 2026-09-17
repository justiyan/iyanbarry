/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: { extend: {
    fontFamily: { sans: ['DM Sans','Arial','sans-serif'], display: ['Fraunces','Georgia','serif'], mono: ['DM Sans','Arial','sans-serif'] },
    colors: {
      ink: { DEFAULT:'var(--ink)', 2:'var(--ink-2)', 3:'var(--ink-3)', 4:'var(--ink-4)' },
      surface: { DEFAULT:'var(--surface)', 2:'var(--surface-2)' },
      hairline: { DEFAULT:'var(--hairline)', strong:'#788b80' },
      accent: { DEFAULT:'var(--accent)', hover:'var(--accent-hover)', soft:'var(--accent-soft)' },
      live:'#24645c'
    },
    spacing: { s1:'4px',s2:'8px',s3:'16px',s4:'24px',s5:'40px',s6:'64px',s7:'96px',s8:'128px' },
    maxWidth: { shell:'1344px',prose:'68ch' },
    letterSpacing: { display:'-0.04em',tight2:'-0.022em' },
    borderRadius: { card:'3px',btn:'30px' }
  } }, plugins: []
}
