module.exports = {
  content: ['./src/pages/**/*.tsx', './src/components/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        red: '#E02041',
        gray: {
          400: '#F0F0F5',
          500: '#DCDCE5',
          600: '#A8A8B3',
          700: '#737380',
          800: '#41414D',
          900: '#13131A',
        },
      },
    },
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
    },
  },
  plugins: [],
}
