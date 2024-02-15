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
      fontSize: {
        '3.5xl': '33px',
      },
      margin: {
        '15': '60px',
      },
      padding: {
        '15': '60px',
      },
      width: {
        '45': '180px',
      },
      height: {
        '45': '180px',
      },
      boxShadow: {
        'sh_Light': "0px 2px 5px 0px rgba(0, 85, 255, 0.25)",
      }
    },
  },
  plugins: [],
}

