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

module.exports = {
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 4s linear infinite',
      },
    },
  },
  plugins: [],
};