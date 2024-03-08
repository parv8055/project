/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      black: "#000000",
      white: "#ffffff",
      gray: "#d9e0f1",
      // primary: "#000000",
      // secondary: "#ff0000",
      // accent: "#fb0000",
      // neutral: "#1c1618",
      background: "#f0f4fd",
      // info: "#38ACFF",
      // success: "#70D32A",
      // warning: "#FFD000",
      // error: "#dc2626",
    },
    extend: {
      fontFamily: {
        display: ["Be Vietnam Pro", "ital"],
      },
    },
  },
  plugins: [],
};
