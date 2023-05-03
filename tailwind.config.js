/** @type {import('tailwindcss').Config} */
// const colors = require('tailwindcss/colors')

module.exports = {
  content: ['index.html', './src/**/*.{js,jsx,ts,tsx,vue,html}', './node_modules/flowbite/**/*.js'],
  theme: {
    colors: {
      'header-green': '#015104',
    },
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
}

