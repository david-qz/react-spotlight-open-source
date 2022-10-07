/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}', './public/index.html'],
  theme: {
    extend: {
      gridTemplateRows: {
        'page-layout': 'min-content auto min-content'
      }
    },
  },
  plugins: [],
};
