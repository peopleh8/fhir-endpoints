/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0068FF',
        'content-bg': '#F2F8FD',
        'sidebar-bg': '#F9FBFD',
        'border': '#D1D9E2',
      },
      fontFamily: {
        'avenir': ['Avenir', 'sans-serif'],
        'dmsans': ['DMSans', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

