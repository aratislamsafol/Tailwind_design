module.exports = {
   plugins: [
        require('flowbite/plugin')
    ],
    content: [
      "./node_modules/flowbite/**/*.js"
  ],
  purge: [],
  darkMode: "media", // or 'media' or 'class'
  theme: {
  
    extend: {
      colors: {
        'regal-blue': '#243c5a',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
