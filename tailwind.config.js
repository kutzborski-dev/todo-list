const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'foreground': {
          DEFAULT: colors.white,
          dark: colors.slate[700],
        }
      }
    },
  },
  plugins: [],
}