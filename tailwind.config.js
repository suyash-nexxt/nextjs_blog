// tailwind.config.js
module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {}
  },
  variants: {
    extend: {
      transform: ['hover', 'focus'],
      zIndex: ['hover', 'active']
    }
  },
  plugins: [require('@tailwindcss/typography')]
};
