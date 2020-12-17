module.exports = {
  purge: ['./src/**/*.html', './src/**/*.tsx'],
  theme: {
    fontFamily: {
      sans: ['Roboto Condensed', 'sans-serif'],
    },
    fontWeight: {
      light: 300,
      normal: 400,
      bold: 600,
    },
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      colors: {
        primary: {
          default: 'rgb(254, 44, 57)',
        },
        'custom-black': {
          default: 'rgb(2, 2, 2)',
          dark: 'rgb(0, 0, 0)',
          // light: 'rgb(239, 239, 239)',
        },
        'custom-gray': {
          default: 'rgb(245, 245, 245)',
          dark: 'rgb(130, 130, 130)',
          light: 'rgb(239, 239, 239)',
        },
      },
    },
  },
  variants: {
    extend: {
      opacity: ['disabled']
    }
  },
  plugins: [],
};
