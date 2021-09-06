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
      typography: (theme) => ({
        DEFAULT: {
          css: {
            a: {
              color: theme('colors.blue.500'),
              '&:hover': {
                color: theme('colors.blue.600'),
              },
            },
          },
        },

        dark: {
          css: {
            color: theme('colors.gray.100'),
            h2: {
              color: theme('colors.gray.100'),
            },
            h3: {
              color: theme('colors.gray.400'),
            },
            blockquote: {
              color: theme('colors.gray.100'),
            },
            strong: {
              color: theme('colors.gray.200'),
            },
            a: {
              color: theme('colors.green.500'),
              '&:hover': {
                color: theme('colors.green.600'),
              },
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {
      transform: ['hover', 'focus'],
      zIndex: ['hover', 'active'],
      typography: ['dark'],
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
