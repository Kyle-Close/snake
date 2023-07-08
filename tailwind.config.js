/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      minWidth: {
        500: "500px",
      },
      backgroundImage: {
        background: "url('/src/img/background.png')",
      },
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
        anton: ["Anton", "sans-serif"],
      },
    },
  },
  plugins: [],
};
