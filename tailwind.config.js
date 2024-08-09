/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'page-title-lg': ['18px', '27px'],
        'main-title-lg': ['36px', '56px'],
        'base': ['16px', '22px'],
        'button-lg': ['14px', '21px'],
        'input-lg': ['14px', '21px'],
        'table-head-lg': ['14px', '17px'],
        'table-body-lg': ['15px', '20px'],
        'pagitation-lg': ['14px', '17px'],
        'menu-lg': ['14px', '17px'],
        'social-login-lg': ['14px', '20px'],
        'divider': ['14px', '24px'],
        'label': ['14px', '14px'],
        'link': ['14px', '20px'],
      },
      colors: {
        'primary': '#0068FF',
        'main-title': '#2B3674',
        'desc': '#A3AED0',
        'primary-hover': '#0055d1',
        'content-bg': '#F2F8FD',
        'sidebar-bg': '#F9FBFD',
        'border': '#D1D9E2',
        'social-login': '#F4F7FE',
        'social-login-hover': '#e5e8f1',
        'decor': '#707EAE',
        'error': '#F87171',
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

