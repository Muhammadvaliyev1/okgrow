/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'Montserrat': ['Montserrat'],
        'Inter': ['Inter']
      },
      screens: {
        'base': '900px',
        'smm': '474px'
      },
      fontSize: {
        'xr': '13px'
      },
      colors: {
        'blacked': '#0F0F0F',
        'gray': '#191919',
        'turquoise-normal': '#6ACBCC',
        'turquoise-darker': '#2C5152',
        'turquoise-lighter': '#D7F5F5',
        'turquoise-bright': '#B3E4E5',
        'skyblue': '#40B4B5'
      },

    },
  },
  plugins: [],
}

