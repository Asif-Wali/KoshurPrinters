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
        },
        moveFromBottom:{
          from:{
            transform: 'translateY(10vh)',
          },
          to:{
            transform: 'translateY(0)'
          },
        },
        moveFromBottom2:{
          from:{
            transform: 'translateY(20vh)',
          },
          to:{
            transform: 'translateY(0)'  
          },
        }
      },
    
      animation: {
        'moveFromLeft': 'moveFromLeft 3s linear forwards',
        'moveFromRight':  'moveFromRight 3s linear forwards',
        'moveFromBottom': 'moveFromBottom 5s linear forwards',
        'moveFromBottom2': 'moveFromBottom2 5s linear forwards',
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