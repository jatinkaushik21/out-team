/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/main component.jsx'
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        roboto: ["Roboto Condensed", "sans-serif"],
      },
      screens:{
'mobile':'430px',
      },
      boxShadow: {
        'custom-black': '0 0px 6px rgba(0, 0, 0, 0.8)',
        'custom-pink': '0 0px 6px rgba(255, 0, 127, 0.8)',
        'custom-blackc': ' 0px 0px 10px  rgba(0, 0, 0, 0.8)',
        'custom-pinkc': ' 0px 0px 12px 8px rgba(255, 0, 127, 0.8)',
      },
    },
  },
  plugins: [],
}

