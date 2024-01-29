/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", './index.html'
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ' system-ui', 'sans-serif']
      },
    },
    colors: {
      'text-gray-400': '#808080',
      'text-gray-500': '#3C3C3C',
      'text-gray-600': 'red',
      'text-blue-600': '#2D9AFF'
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
