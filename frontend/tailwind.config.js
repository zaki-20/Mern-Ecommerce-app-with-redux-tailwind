/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}",'node_modules/preline/dist/*.{html,js,jsx}',],
  theme: {
    extend: {},
  },
  plugins: [  require('preline/plugin'),],
}