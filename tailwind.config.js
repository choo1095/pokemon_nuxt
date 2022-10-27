/** @type {import('tailwindcss').Config} */

module.exports = {
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif']
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      ultraWide: '1360px',
      overBreakPoint: '1536px',
    },
    extend: {
      colors: {
        'primary': '#FC0017',
        'offWhite': '#F7F7F9',
        'darkBlue': '#214497',
        'pokeballWhite': '#F1F1F1',
        'cardBg': '#F9F7F7',
        'screenBgBlue': '#7ADDE9',
      },
      fontSize: {
        'xss': ['10px', '0px'],
      },
      backgroundImage: {
        'semicircle-bg': "url('@/assets/img/semicircle_white.svg')",
        'pokemon-ball-center': "url('@/assets/img/pokemon_ball_center.svg')",
        'placeholder-img': "url('@/assets/img/placeholder_image.png')",
        'meteor-bg': "url('@/assets/img/meteor.png')",
      }
    }
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
}