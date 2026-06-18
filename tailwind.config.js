/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#F5F7FE',
          100: '#ECF2FF',
          // Correct Teal color for the Sign Up button
          500: '#52B4DA',
          600: '#2563eb', // Old Primary (kept just in case)
          // Correct Dark blue for logo/Sign In text
          700: '#253D80',
          // Correct main dark blue hero background color
          800: '#1E3E85',
          900: '#11142D',
        },
        // The lighter blue pattern in the hero
        'hero-accent-light': '#C2EEFF',
      },
    },
  },
  plugins: [],
}