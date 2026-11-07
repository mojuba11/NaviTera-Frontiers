/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navitera: {
          navy: '#0B1924',
          dark: '#0A131B',
          gold: '#C89D4B',
        }
      }
    },
  },
  plugins: [],
}