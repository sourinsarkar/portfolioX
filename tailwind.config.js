const colors = require('./colors');

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: colors,
      screens: {
        'mid-lg': '832px',
      },
    },
  },
  plugins: [],
}

