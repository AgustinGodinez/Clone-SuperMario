/* eslint-disable no-unused-vars */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: theme =>({
        'wave-pattern': 'url(/public/img/wave-white.png)',
        'wave-pattern-dots': 'url(/public/img/pattern-white-dots.png)',
        'pattern-characters-red': "url(/public/img/pattern-characters-red.png)",
        'character-mario': "url(/public/img/character-l.png)",
        'wave-pink': "url(/public/img/wave-pink.png)",
        'yellow-dots': "url(/public/img/pattern-yellow-dots.png)",
      }),
      screens:{
        'xsm':'320px'
      }
    },  },
  plugins: [],
};
