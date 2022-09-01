/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./views/**/*.handlebars'],
  theme: {
    screens:{
      ms: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px"
    },
    extend: {},
  },
  plugins: [],
}
