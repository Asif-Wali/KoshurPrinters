/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'Secondary': '#658289',
        'Primary':'#f5075e'
      },
      spacing: {
        '22': '5.25rem',
        
      }
    }
  },
  plugins: [],
}