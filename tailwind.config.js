/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        'russian-violet' : '#150F3F',
        'mettalic-gold' : '#D1AB29',
        'sheen-gold' : '#C09D4B',
        'ecru' : '#D7C18E',
        'tiger-eye' : '#AD6827',
        'earth-yellow' : '#D4A66A',
        'antique-bronze' : '#967154',
        'olive' : '#40422D',
        'metalic-grey' : '#48493B',
        'dark-grey' : '#37372B',
        'coyote' : '#85602B',
        'arylide-yellow' : '#E5C973',
        'lavender' : '#E3DFFF',
        'poly-green' : '#214E34'

      },
      backgroundImage: (theme) => ({
        "gradient-rainbow":
          "linear-gradient(81.66deg, #00b5ee 7.21%, #ff45a4 45.05%, #ffba00 78.07%)",
        "gradient-rainblue":
          "linear-gradient(90deg, #24cbff 14.53%, #fc59ff 69.36%, #ffbd0c 117.73%)",
        "hero-image": "url(../public/about.jpg)",
        "gradient-blue":
          "linear-gradient(90deg, #24cbff 14.53%, #fc59ff 69.36%, #ffbd0c 117.73%)"
      }),
      fontFamily : {
        montserrat: ["Montserrat", "serif"]
      },
    },
  },
  plugins: [],
}
