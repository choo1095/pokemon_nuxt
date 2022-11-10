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
        'blue362056': '#362056',
        'black221F1E': '#221F1E',
        'blue1C5DAB': '#1C5DAB',
        'black303030': '#303030',
        'greyA3A3A3': '#A3A3A3',
        'blue62B2C6': '#62B2C6',
        'greyDBDCD7': '#DBDCD7',
        'greyC1C2BA': '#C1C2BA',
      },
      fontSize: {
        'xss': ['10px', '0px'],
      },
      backgroundImage: {
        'semicircle-bg': "url('@/assets/img/semicircle_white.svg')",
        'pokemon-ball-center': "url('@/assets/img/pokemon_ball_center.svg')",
        'placeholder-img': "url('@/assets/img/placeholder_image.png')",
        'meteor-bg': "url('@/assets/img/meteor.png')",
        'pikachu-thumb': "url('@/assets/img/pikachu_thumb.svg')",
        'pokeball-outline': "url('@/assets/img/pokeball_outline.svg')",
        'right-arrow': "url('@/assets/img/right_arrow.svg')",
        'left-arrow': "url('@/assets/img/left_arrow.svg')",
        'pikachu-wave': "url('@/assets/img/pikachu_wave.svg')",
        'pikachu-teehee': "url('@/assets/img/pikachu_teehee.svg')",
        'charmander-finger-guns': "url('@/assets/img/charmander_finger_guns.svg')",
        'pikachu-yeehaw': "url('@/assets/img/pikachu_yeehaw.svg')",
        'bin': "url('@/assets/img/bin.svg')",
        'detail-blue-background': "url('@/assets/img/detail_blue_background.svg')",
        'circle-account': "url('@/assets/img/circle_account.svg')",
        'weird-pikachu': "url('@/assets/img/weird_pikachu.svg')"
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