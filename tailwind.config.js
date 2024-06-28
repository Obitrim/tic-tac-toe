/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        pinmold: ["Pinmold"],
        electrom: ["Electrom"],
        zekton: ["Zekton"],
      },
    },
  },
  plugins: [],
};
