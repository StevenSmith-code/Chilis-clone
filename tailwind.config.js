module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {

      colors:{
        chilibaje: '#F8F5F2',
        chilitext: '#F5E9DA',
        loginbg: "#FDFDFD"
      },

      fontFamily:{
        main: ["Montserrat", "sans-serif"],
        banner: ['Alfa Slab One', 'cursive'],
        parafont: ['Barlow Condensed', 'sans-serif']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-textshadow')
  ],
}
