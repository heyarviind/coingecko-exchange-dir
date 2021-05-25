module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "0rem",
      },
      screens: {
        sm: "100%",
        md: "100%",
        lg: "800px",
        xl: "800px",
        xxl: "800px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
