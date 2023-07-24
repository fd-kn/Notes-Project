/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      backgroundImage:{
        'home': 'url(Images/planetrise.jpg)',
        'navbar': 'url(Images/planetrise.jpg)'
      }
    },
  },
  plugins: [],
}

