/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        container: "1604px",
      },
      fontFamily: {
        dm: ["DM Sans", "sans-serif"],
      },
      colors: {
        tcolor: "#262626",
        t2color: "#767676",
        bordercolor: "#f0f0f0",
      },
      width: {
        detailWidth: "56%",
        QNTWidth: "20%",
        priceWidth: "12%",
        totalWidth: "12%",
      },
    },
  },
  plugins: [],
};
