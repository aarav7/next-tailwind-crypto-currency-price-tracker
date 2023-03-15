/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary": "#038AF9",
        "background-color": "#F4F9FF",
        "text": "#0049AC"
      },
    },
    fontFamily: {
      primary: ["Inter", "sans-serif"]
    }
  },
  plugins: [],
}
