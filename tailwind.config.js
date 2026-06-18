/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      // custom colors 
      colors: {
        brand: {
          50: '#F5F7FE',
          100: '#ECF2FF',
          500: '#52B4DA',
          600: '#2563eb', // Old Primary (kept just in case)
          700: '#253D80',
          800: '#1E3E85',
          900: '#11142D',
        },
        'hero-accent-light': '#C2EEFF',
      },
    },
  },
  plugins: [],
}