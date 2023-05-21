/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,php}"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        dark: "#2B2B2B",
        Orange: "#E78A00",
      },
      fontSize: {
        '10xl': '20rem',
        '100xl': '200rem',


      },
      width: {
        '140': '45rem',
        '100': '40rem',

      },
      height: {
        '100': '35rem',
      },
      padding: {
        '1/3': '33%',
        '2/3': '67%',
      },
    },
  },
  plugins: [],
}

