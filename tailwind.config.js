/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#BF0603',
        secondary: '#EF817F',
        disabled: '#C8AAA9',
        accent: '#FE3734',
        text: '#0A0606',
        textDark: '#F4EBEB',
        textSecondary: '#757575',
        background: '#FCF8F8',
        backgroundDark: '#140A0A',
      },
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
