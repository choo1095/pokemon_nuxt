/** @type {import('tailwindcss').Config} */

module.exports = {
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif']
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        'primary': '#FC0017',
        'offWhite': '#F7F7F9',
        'darkBlue': '#214497',
      },
    }
  },
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
}