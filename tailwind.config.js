/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{cjs,mjs,js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ' system-ui', 'sans-serif']
      },
    },
  },
  plugins: [],
}
