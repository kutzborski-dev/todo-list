const { light, dark } = require('./src/theme');
const {nextui} = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      // colors: theme
    },
  },
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            primary: '#0000FF'
          }
        },
        light: {
          extend: "light",
          colors: light
        },
        dark: {
          extend: "dark", // <- inherit default values from dark theme
          colors: dark,
          // layout: {
          //   disabledOpacity: "0.3",
          //   radius: {
          //     small: "4px",
          //     medium: "6px",
          //     large: "8px",
          //   },
          //   borderWidth: {
          //     small: "1px",
          //     medium: "2px",
          //     large: "3px",
          //   },
          // }
        }
      }
    })
  ],
}