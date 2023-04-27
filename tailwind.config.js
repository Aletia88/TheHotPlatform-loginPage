/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",

  ],

  important: "#root",

  theme: {
    extend: {
      colors: {
        'golden' : '#DAA624',
      },
      fontFamily:{
        'Poppins' : 'Poppins'
      }
    },
  },
  plugins: [],
}
