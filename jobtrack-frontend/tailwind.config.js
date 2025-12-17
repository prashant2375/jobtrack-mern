/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // ⭐ THIS is the key line
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
