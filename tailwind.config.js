// tailwind.config.js
module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    minWidth: {
      '1/4': '25%',
      '1/3': '33%',
      '1/2': '50%',
    },
    extend: {
      backgroundImage: (theme) => ({
        'project-github': "url('/github.png')",
        'project-chat': "url('/chat_app.png')",
        'project-reddit': "url('/reddit.png')",
        'project-notes': "url('/notes.png')",
        'project-ecommerce': "url('/e-commerce.png')",
      }),
    },
  },
  variants: {
    extend: {
      transform: ['hover', 'focus'],
      zIndex: ['hover', 'active'],
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
