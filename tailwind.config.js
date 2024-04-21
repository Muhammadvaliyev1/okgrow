/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'Montserrat': ['Montserrat'],
        'Inter': ['Inter']
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
      },

    },
  },
  plugins: [],
}

