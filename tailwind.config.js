/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        coffee: {
          light: '#8B4513',
          dark: '#3E2723',
          cream: '#D2691E',
        }
      }
    },
  },
  plugins: [],
}