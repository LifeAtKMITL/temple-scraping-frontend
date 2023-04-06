/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#5EE8D5',
        bg: '#10192D',
      },
      gridTemplateRows: {
        document: 'auto auto 1fr auto',
      },
    },
  },
  plugins: [],
};
