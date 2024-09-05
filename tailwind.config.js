/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        bluish: "rgb(19, 23, 68)",
        darkbluish: "rgb(28, 31, 74)",
        orangish: "rgb(255, 79, 82)",
      },
      borderWidth: {
        1: "1px",
      },
    },
  },
  plugins: [],
};
