/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  // graph components build some colour classes from variables (e.g. `stroke-${color}`)
  safelist: [{ pattern: /^(fill|stroke)-(ink|muted|demand|supply|good|bad|warn|tax|pen|marker)$/ }],
  theme: {
    extend: {
      colors: {
        bg: 'rgb(var(--bg) / <alpha-value>)',
        surface: 'rgb(var(--surface) / <alpha-value>)',
        surface2: 'rgb(var(--surface2) / <alpha-value>)',
        line: 'rgb(var(--line) / <alpha-value>)',
        ink: 'rgb(var(--ink) / <alpha-value>)',
        muted: 'rgb(var(--muted) / <alpha-value>)',
        accent: 'rgb(var(--accent) / <alpha-value>)',
        demand: 'rgb(var(--demand) / <alpha-value>)',
        supply: 'rgb(var(--supply) / <alpha-value>)',
        good: 'rgb(var(--good) / <alpha-value>)',
        bad: 'rgb(var(--bad) / <alpha-value>)',
        warn: 'rgb(var(--warn) / <alpha-value>)',
        tax: 'rgb(var(--tax) / <alpha-value>)',
        marker: 'rgb(var(--marker) / <alpha-value>)',
        pen: 'rgb(var(--pen) / <alpha-value>)',
        'postit-yellow': 'rgb(var(--postit-yellow) / <alpha-value>)',
        'postit-pink': 'rgb(var(--postit-pink) / <alpha-value>)',
        'postit-blue': 'rgb(var(--postit-blue) / <alpha-value>)',
        'postit-green': 'rgb(var(--postit-green) / <alpha-value>)',
      },
      boxShadow: {
        hard: '5px 5px 0 0 rgb(var(--ink))',
        'hard-sm': '3px 3px 0 0 rgb(var(--ink))',
        'hard-lg': '7px 7px 0 0 rgb(var(--ink))',
      },
      fontFamily: {
        sans: ['Onest', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Unbounded', 'Onest', 'system-ui', 'sans-serif'],
        hand: ['Mali', 'cursive'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      maxWidth: { prose: '44rem' },
    },
  },
  plugins: [],
};
