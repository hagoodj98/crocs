/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  prefix: "tw-",
  
  theme: {
    extend: {
      fontFamily:{
        'wave': ["Knewave", 'serif'],
        'cursive': ["Edu AU VIC WA NT Pre", 'cursive'],
      }
    },
  },
  plugins: [],
}

