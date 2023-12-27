/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./*.html'],
  theme: {
    extend: {
      keyframes: {
        move: {
          "50%": { transorm: 'translateY(-1rem)' }
        }
      },
      animation: {
        'movingY': "move 2s linear infinite"
      }
    },
  },
  plugins: [],
}

