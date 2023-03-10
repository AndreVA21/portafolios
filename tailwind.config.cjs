/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-blue": "#0046ff",
        "main-cyan": "#2cb7b9",
        "main-red": "#f44336",
        "main-yellow": "#f8d750",
        "main-slate": "#999999",
        "main-purple": "#674ea7",
        "main-typescript": "#65a4db",
      },
    },
  },
  plugins: [],
};
