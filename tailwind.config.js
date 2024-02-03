/* eslint-disable @typescript-eslint/no-var-requires */
const konstaConfig = require('konsta/config')
const colors = require('tailwindcss/colors')

/** @type {import('konsta').Config} */
module.exports = konstaConfig({
  konsta: {
    colors: {
      primary: colors.indigo[600],
    },
  },
  content: [
    './components/**/*.{vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.ts',
    './nuxt.config.ts',
    './app.vue',
  ],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fade-in .15s',
        'fade-out': 'fade-out .15s',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-out': {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
      width: {
        frame: '28rem',
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
})
