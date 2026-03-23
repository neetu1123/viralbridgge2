/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#7C3AED',
        'primary-light': '#9F67FF',
        accent: '#F97316',
        'accent-light': '#FB923C',
        bg: '#0D0F14',
        surface: '#151821',
        'surface-2': '#1C2030',
        fg: '#F1F5F9',
        'fg-muted': '#94A3B8',
        'fg-dim': '#475569',
        'vb-green': '#22C55E',
        'vb-red': '#EF4444',
      },
      fontFamily: {
        display: ['Plus Jakarta Sans', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'hero': 'clamp(3rem, 8vw, 6.5rem)',
        'display': 'clamp(2rem, 5vw, 3.5rem)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      animation: {
        'float': 'float 4s ease-in-out infinite',
        'pulse-dot': 'pulse-dot 1.5s ease-in-out infinite',
        'feed-scroll': 'feedScroll 30s linear infinite',
        'morph': 'morphBlob 8s ease-in-out infinite',
        'shimmer': 'shimmer 2s infinite',
      },
    },
  },
  plugins: [],
};