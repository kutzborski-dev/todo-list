const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'foreground': {
          DEFAULT: colors.white,
          dark: colors.slate[700],
        },
        primary: {
          DEFAULT: colors.sky[600],
          hover: colors.sky[500],
          dark: colors.violet[500],
          'dark-hover': colors.violet[600]
        }
      }
    },
  },
  plugins: [],
}