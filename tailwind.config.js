const plugin = require('tailwindcss/plugin');

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],

  // important: '#app',

  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateRows: {
        'portfolio-layout': '490px',
      },
      maxWidth: {
        160: '160px',

        200: '270px',
        78: '19.5rem',
        85: '21.25rem',
        88: '22rem',
      },
      minWidth: {
        78: '19.5rem',
        85: '21.25rem',
        88: '22rem',
      },
      colors: {
        'primary-cyan': '#5FB4A2',
        'primary-blue': {
          DEFAULT: '#203A4C',
          dark: '#33323D',
        },

        'secondary-gray': {
          DEFAULT: '#EAEAEB',
          light: '#FAFAFA',
        },
        'secondary-bright-red': '#F43030',
      },

      spacing: {
        13: '3.25rem',
        15: '3.75rem',
        20: '5rem',
        81: '21rem',
        112: '28rem',
        128: '32rem',
        144: '36rem',
        150: '37.5rem',
      },
      screens: {
        'mobile-xl': '426px',
        'mobile-xxl': '540px',
        'laptop-sm': '846px',
        'laptop-lg': '1364px',
        '2xl': '1440px',
      },
    },
    fontFamily: {
      ibarra: "'Ibarra Real Nova', serif",
      public: "'Public Sans', sans-serif",
    },
  },
  variants: {
    extend: {
      backgroundColor: ['disabled'],
    },
  },
  plugins: [
    plugin(function ({ addUtilities, theme }) {
      const newUtilities = {
        '.scroll-smooth': {
          'scroll-behavior': 'smooth',
        },
        '.max-w-160-imp': {
          'max-width': '160px !important',
        },
        '.max-w-210-imp': {
          'max-width': '210px !important',
        },
        '.mt-12-imp': {
          'margin-top': '3rem !important',
        },
        '.btn-primary-disabled': {
          'background-color': theme('colors.gray.300'),
          cursor: 'not-allowed',
        },
      };

      addUtilities(newUtilities);
    }),
  ],
};
