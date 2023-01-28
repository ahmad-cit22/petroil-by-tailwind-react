/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      textColor: {
        primary: "#F40404",
        para: "#7d7d7d",
        yellowText: "#FFB800",
      },
      fontSize: {
        large: "64px",
      },
      fontFamily: {
        pop: ["Poppins", "sans-serif"],
      },
      maxWidth: {
        container: "1140px",
      },
      backgroundColor: {
        primary: "#F40404",
        secondary: "#282828",
        darkLight: "rgba(0, 0, 0, 0.6)",
        ashLite: "#F0F0F5",
      },
      borderColor: {
        primary: "#F40404",
        yellowBorder: "#FFB800",
      },
      screens: {
        sm: "375px",
        smL: "600px",
        md: "768px",
        lg: "1024px",
        xl: "1200px",
      },
    },
  },
};
