/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#073B4C',
        'secondary': '#118AB2',
        'success': '#06D6A0',
        'waring': '#FFD166',
        'error': '#EF476F',
        'primary-dark': '#D3D3D3',
      },
      boxShadow: {
        'light-color': '0 0 20px 5px rgba(255,255,255,0.4)',
        'dark-color': '0 0 20px 5px rgba(0,0,0,0.4)',
      }
    },
  },
  plugins: [],
}

