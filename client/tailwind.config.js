/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        signBg:{
          100:"#1f4d91",
          200:"#7894bd"
        }
      }
    },
  },
  plugins: [],
}