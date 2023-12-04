/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5D3891",
        accentYellow: "#EEA1EB",
        accentPink: "#FFE9E3",
        accentBlue: "#D6E5FA",
        text: "#242424",
      },
    },
  },
  plugins: [],
};
