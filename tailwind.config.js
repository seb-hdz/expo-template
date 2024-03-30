/** @type {import('tailwindcss').Config} */
const dark = {
  primary: "#BD4F6C",
  secondary: "#D7816A",
  typography: "#fff",
  surface: "#252627",
  "surface-2": "#313335",
  "surface-3": "#3B3D40",
  contrast: "#CCC7B9",
  "low-contrast": "#CCC7B94D",
  danger: "#ef4444",
  warning: "#fbbf24",
};

const light = {};

const colors = dark;

module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: { colors },
  },
  plugins: [],
};
