/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/components/**/*.{ts, tsx}", "./pages/**/*.{ts, tsx}"],
  theme: {
    fontFamily: {
      lex: ["Lexend", "sans-serif"],
      inter: ["Inter", "sans-serif"],
    },
    extend: {
      colors: {
        // Primary colors
        brand1: "#4529E6",
        brand2: "#5126EA",
        brand3: "#B0A6F0",
        brand4: "#EDEAFD",

        // Grey scale
        gray0: "#0B0D0D",
        gray1: "#212529",
        gray2: "#495057",
        gray3: "#868E96",
        gray4: "#ADB5BD",
        gray5: "#CED4DA",
        gray6: "#DEE2E6",
        gray7: "#E9ECEF",
        gray8: "#F1F3F5",
        gray9: "#F8F9FA",
        gray10: "#FDFDFD",
        whitefixed: "#FFFFFF",

        // Feedback colors
        alert1: "#CD2B31",
        alert2: "#FDD8D8",
        alert3: "#FFE5E5",
        success1: "#18794E",
        success2: "#CCEBD7",
        success3: "#DDF3E4",

        // Random profile colors
        random1: "#E34D8C",
        random2: "#C04277",
        random3: "#7D2A4D",
        random4: "#7000FF",
        random5: "#6200E3",
        random6: "#36007D",
        random7: "#349974",
        random8: "#2A7D5F",
        random9: "#153D2E",
        random10: "#6100FF",
        random11: "#5700E3",
        random12: "#30007D",
      },
      fontSize: {
        custom44: "2.75rem",
        custom32: "2rem",
        custom28: "1.75rem",
        custom22: "1.375rem",
      },
      lineHeight: {
        line56: "3.5rem",
        line45: "2.8rem",
        line0: "0px",
      },
      height: {
        custom365: "365px",
        custom90: "90px",
      },
      padding: {
        custom15: "15x",
        custom10: "10px",
      },
      maxWidth: {
        custom344: "344px",
        custom375: "375px",
        custom454: "454px",
      },
      width: {
        custom90: "90px",
      },
    },
    plugins: [],
  },
};
