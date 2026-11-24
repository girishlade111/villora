/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#ebe3da',
        surface: '#efe9e1',
        'card-bg': '#e4d7c9',
        neutral: '#0a1010',
        dark: '#0a1010',
        'text-light': '#474747',
        'text-dark': '#989898',
        stroke: '#3a3a3a',
        border: 'rgba(10, 16, 16, 0.17)',
      },
      fontFamily: {
        display: ['Oranienbaum', 'serif'],
        heading: ['Bellefair', 'serif'],
        sans: ['Manrope', 'sans-serif'],
      },
      maxWidth: {
        'container': '1172px',
        'container-lg': '1352px',
        'container-xl': '1832px',
        'header': '728px',
      },
      borderRadius: {
        'sm': '2px',
        'DEFAULT': '4px',
        'md': '6px',
        'lg': '8px',
      },
    },
  },
  plugins: [],
}
