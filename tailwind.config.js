/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{ts, tsx}",
    "./pages/components/**/*.{ts, tsx}",
  ],
  theme: {
    fontFamily: {
      lex: ["Lexend", "sans-serif"],
      inter: ["Inter", "sans-serif"],
    },
    extend: {
      colors: {
        // Primary colors
        brand-1: "#4529E6",
        brand-2: "#5126EA",
        brand-3: "#B0A6F0",
        brand-4: "#EDEAFD",

        // Grey scale
        gray-0: "#0B0D0D",
        gray-1: "#212529",
        gray-2: "#495057",
        gray-3: "#868E96",
        gray-4: "#ADB5BD",
        gray-5: "#CED4DA",
        gray-6: "#DEE2E6",
        gray-7: "#E9ECEF",
        gray-8: "#F1F3F5",
        gray-9: "#F8F9FA",
        gray-10: "#FDFDFD",
        white-fixed: "#FFFFFF",

        // Feedback colors
        alert-1: "#CD2B31",
        alert-2: "#FDD8D8",
        alert-3: "#FFE5E5",
        success-1: "#18794E",
        success-2: "#CCEBD7",
        success-3: "#DDF3E4",

        // Random profile colors
        random-1: "#E34D8C",
        random-2: "#C04277",
        random-3: "#7D2A4D",
        random-4: "#7000FF",
        random-5: "#6200E3",
        random-6: "#36007D",
        random-7: "#349974",
        random-8: "#2A7D5F",
        random-9: "#153D2E",
        random-10: "#6100FF",
        random-11: "#5700E3",
        random-12: "#30007D",
      },
      font-size: {
        custom-44: "2.75rem",
        custom-32: "2rem",
        custom-28: "1.75rem",
      },
      lineHeight: {
        line-56: "3.5rem",
        line-45: "2.8rem",
        line-0: "0px",
      },
    },
    plugins: [],
  },
};
