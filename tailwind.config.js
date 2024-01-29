/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", './index.html'
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ' system-ui', 'sans-serif']
      },
      colors: {
        'gray-400': '#808080',
        'gray-500': '#3C3C3C',
        'gray-600': '#111111',
        'blue-600': '#2D9AFF',
      },
      boxShadow: {
        lg: '0 20px 30px -15px rgba(0, 0, 0, 0.10)',
      }
    },
    container: {
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        // xl: '1240px',
      },
    },
  },
  plugins: [],
}
