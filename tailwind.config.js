const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./**/*.tsx"],
  theme: {
    fontFamily: {
      display: ["Inter", "system-ui", "sans-serif"],
      body: ["Inter", "system-ui", "sans-serif"]
    },
    colors: {
      ...defaultTheme.colors,
      primary: {
        900: "#742A2A",
        800: "#9B2C2C",
        700: "#AF1818",
        600: "#C12C27",
        500: "#DF5754",
        400: "#FC8181",
        300: "#FEB2B2",
        200: "#FED7D7",
        100: "#FFF5F5",
        50: "#FFFAFA"
      }
    },
    fontSize: {
      "4xs": "0.25rem",
      "3xs": "0.375rem",
      "2xs": "0.5rem",
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem"
    },
    extend: {
      colors: {
        cyan: colors.cyan,
        rose: colors.rose
      },
      zIndex: {
        "-10": "-10",
        "-20": "-20",
        "-30": "-30",
        "-40": "-40",
        "-50": "-50"
      },
      lineHeight: {
        12: "3rem",
        16: "3.5rem",
        20: "4rem",
        24: "4.5rem",
        28: "5rem"
      },
      maxWidth: {
        "8xl": "90rem",
        "9xl": "100rem"
      },
      spacing: {
        "128": "32rem"
      }
    }
  },
  variants: {},
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio")
  ]
};
