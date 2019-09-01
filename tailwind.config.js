const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    backgroundColor: theme => ({
     'primary': '#f2f5f3',
     'secondary': '#edebdf',
     'menu': '#b1ddab',
     'menu-hover': '#c1edbb',
     'link': '#c1cac5',
     'link-hover': '#ccd5d0',
     'black': '#000000'
   }),
   borderColor: theme => ({
     'primary': '#6B7770',
     'secondary': '#C1CAC5'
   }),
   fontFamily: theme => ({
     'title': ['Open Sans Condensed', 'sans-serif'],
     'content': ['Open Sans', 'sans-serif'],
     'code': ['Courier', 'New Courier', 'monospace']
   }),
   inset: theme => ({
    'title': '0.775em',
    'span': '-0.775em'
   }),
   textColor: theme => ({
     'primary': '#6B7770',
     'secondary': '#C1CAC5',
     'general': '#6b7770',
     white: colors.white,
     'green': 'green'
   }),
   textShadow: { // defaults to {}
    'default': '0 2px 5px rgba(0, 0, 0, 0.5)',
    'lg': '0 2px 10px rgba(0, 0, 0, 0.5)',
   },
  },
  variants: { // all the following default to ['responsive']
    textIndent: ['responsive'],
    textShadow: ['responsive'],
    ellipsis: ['responsive'],
    hyphens: ['responsive'],
    textUnset: ['responsive']
  },
  plugins: [
    require('tailwindcss-typography')({
      ellipsis: true,         // defaults to true
      hyphens: true,          // defaults to true
      textUnset: true,        // defaults to true
      componentPrefix: 'c-',  // for text styles; defaults to 'c-'
    })
  ],
  corePlugins: {
    backgroundRepeat: false,
    borderCollapse: false,
    fill: false,
    float: false,
    fontSmoothing: false,
    objectFit: false,
    opacity: false,
    order: false,
    outline: false,
    stroke: false,
    tableLayout: false,
    userSelect: false,
    zIndex: false,
  }
}
