/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"hsl(142, 86%, 28%)",
        gray:"hsl(240, 4.8%, 95.9%)",
        hover:"hsl(142, 86%, 31%)"
      }
    },
  },
  plugins: [],
}