/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        logo: ['Roboto', 'sans-serif'],
        sans: ['Poppins', 'sans-serif'],
      },
      gridTemplateColumns: {
        '70/30' : '70% 28%',
      },
      colors: {
        'primary': '#005069',
        'secondary': '#99fcff',
        'tertiary': '#e1f6fc',
        'hover': '#015c78',
        'bg': '#f0feff'
      }
    },
  },
  plugins: [],
}