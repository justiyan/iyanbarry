/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      colors: {
        // Ink scale
        ink: {
          DEFAULT: '#0b0d0f',
          2: '#3d444d',
          3: '#6e7781',
          4: '#a5acb4',
        },
        // Surfaces
        surface: {
          DEFAULT: '#ffffff',
          2: '#f6f8fa',
        },
        hairline: {
          DEFAULT: '#e4e8ec',
          strong: '#d3d9df',
        },
        accent: {
          DEFAULT: '#1f5fd0',
          hover: '#1a51b3',
          soft: '#eaf1fd',
        },
        live: '#2da44e',
      },
      // 8pt spacing scale
      spacing: {
        s1: '4px',
        s2: '8px',
        s3: '16px',
        s4: '24px',
        s5: '40px',
        s6: '64px',
        s7: '96px',
        s8: '128px',
      },
      maxWidth: {
        shell: '1120px',
        prose: '68ch',
      },
      letterSpacing: {
        display: '-0.032em',
        tight2: '-0.022em',
      },
      borderRadius: {
        card: '10px',
        btn: '7px',
      },
    },
  },
  plugins: [],
}
