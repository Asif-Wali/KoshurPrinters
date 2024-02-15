/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes:{
        moveFromLeft:{
          from:{
            transform: 'translateX(-5vw)',
          },
          to:{
            transform: 'translateX(0)'
          },
        },
        moveFromRight:{
          from:{
            transform: 'translateX(5vw)',
          },
          to:{
            transform: 'translateX(0)'
          },
        }
      },
    
      animation: {
        'moveFromLeft': 'moveFromLeft 2s linear forwards',
        'moveFromRight':  'moveFromRight 2s linear forwards',
      },
      colors: {
        'Secondary': '#658289',
        'Primary':'#f5075e',
        'Gframe': '#1a73e8'
      },
      spacing: {
        '22': '5.25rem',
        
      }
    }
  },
  plugins: [],
}