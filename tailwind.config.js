/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#FBF3E7',
        ink: '#2A1D14',
        'ink-muted': '#7A6A57',
        border: '#E4D5C0',
        accent: { DEFAULT: '#C1440E', dark: '#9A350A' },
        trust: { DEFAULT: '#1B5E3C', dark: '#123F28' },
        sale: '#D9A441',
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        body: ['Manrope', 'sans-serif'],
      },
      borderRadius: {
        sm: '3px',
        md: '6px',
      },
    },
  },
  plugins: [],
}
