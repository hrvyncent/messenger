import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms'

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{vue, jsx, tsx}',
    './index.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        mono: ['Fira Code', ...defaultTheme.fontFamily.mono],
      }
    },
  },
  plugins: [forms],
}
