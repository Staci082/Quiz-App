/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily :{ 
        gloria: ['Gloria Hallelujah', "cursive"],
        nanum: ['Nanum Pen Script', "cursive"]
      } 
    },
},
  plugins: [],
}
