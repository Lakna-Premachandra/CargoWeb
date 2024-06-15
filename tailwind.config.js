/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        yellow: "#fac832",
        lightOrange: "#FF7C46",
        darkBlue: "#142e5d",
        lightBlue: "#08c4e4",
        gray: "#606c84",
        darkOrange: "#f89c14",
        darkGreen: "#024B5A",
        lightGreen: "#afcd7e",
      },
      fontFamily: "Poppins, sans-serif;"

    },
  },
  plugins: [],
}

