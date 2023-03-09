/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
    },
    fontFamily: {
      'Courgette': ["Courgette", 'cursive'],
      'Philosopher': ['Philosopher', 'sans-serif'],
      'Fredoka': ['Fredoka One', 'cursive'],
      'Titan': ['Titan One', 'cursive']
    },
  },
  plugins: [],
}