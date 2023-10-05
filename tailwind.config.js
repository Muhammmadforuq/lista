/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        fira:['Fira Sans','sans-serif'],
        condensed:['Roboto Condensed','sans-serif'],
      },
      fontSize: {
        11:['0.6875rem','0.825rem'],
        13:['13px', '0.975rem'],
        17: '17px',
        22:['1.375rem', '1.6113rem']
      },
      colors: {
        brand: {
          gray:{
            50:"#d9d9d9",
            100:'#E6E6E6',
            200:'#808080',
            300:'#F2F2F2'
          },
          purple:'#4849A6',
        }
      },
      backgroundImage:{
        'cart-gr':"linear-gradient(270deg, #A348EA 0%, #4B49A8 100%)",
        'btn':"linear-gradient(180deg, #4849A6 0%, #48EBCC 100%)"
      },
      borderRadius:{
        3:'0.625rem',
      },
      borderWidth:{
        3:'0.1875rem',
      },
      spacing: {
        13:'3.1875rem',
        90: '22.5rem',
      },
     
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar'),
  ],
}

