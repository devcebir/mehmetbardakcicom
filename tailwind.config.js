/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      saturate: {
        0: "0",
        10: ".3",
        50: ".5",
        100: "1",
        200: "2",
        300: "3",
        400: "4",
        500: "5",
      },
    },
    screens: {
      xsm: "376px",
      sm: "480px",
      base: "555px",
      md: "769px",
      lg: "1130px",
      xl: "1470px",
      xxl: "1537px"
    },
  },
  plugins: [],
};
