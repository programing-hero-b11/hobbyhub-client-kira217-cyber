/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // Enables class-based dark mode
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Scans all files in src folder
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

