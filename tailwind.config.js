/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'Montserrat': ['Montserrat'],
        'Inter': ['Inter']
      },
      maxWidth: {
        '8xl': '1440px',
        '7.5xl': '1104px',
        '2.5xl': '728px',
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
        'green-darker': '#215235',
        'purple-lighter': '#DBD7F5',
        'purple-darker': '#383452',
        'turquoise-normal': '#6ACBCC',
        'turquoise-darker': '#2C5152',
        'turquoise-lighter': '#D7F5F5',
        'turquoise-bright': '#B3E4E5',
        'skyblue': '#40B4B5',
        'purple-darker': '#383452',
        'pastelOrange-darker': '#664514',
        'sunsetOreng-normal': '#664514',
      },

    },
  },
  plugins: [],
}

