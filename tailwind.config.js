/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    colors: {
      'light': '#ffffff',
      'dark': '#0E0F10',
      'mid': '#9E9E9E',
      'accent': '#4964EF',
      'textfield': '#E9E8EA',
      'invalid': '#EF4949',
      'valid': '#36C16E'
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
