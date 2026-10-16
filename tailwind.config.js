/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './App.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        // Desktop layout on wide screens and on phones held in landscape.
        lg: { raw: '(min-width: 1024px), (orientation: landscape) and (min-width: 640px)' },
      },
    },
  },
  plugins: [],
};
