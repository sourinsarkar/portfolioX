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
        'mq-4': '400px',
      },
    },
  },
  plugins: [],
}

