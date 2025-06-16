/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
   extend: {
  fontFamily: {
    desi: ['"Teko"', 'sans-serif']
  }
}
  },
  plugins: [],
}
