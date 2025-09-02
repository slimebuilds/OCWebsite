/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: '#65c88c',
      },
      fontFamily: {
        bebas: ['"Bebas Neue"', 'cursive'],
      },
    },
  },
  plugins: [],
};
