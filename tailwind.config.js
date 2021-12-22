module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
    },
    fontSize: {
      xs: ["11px", "13px"],
      sm: ["12px", "16px"],
      base: ["14px", "18px"],
      lg: ["20px", "28px"],
      xl: ["24px", "32px"],
    },
    extend: {
      colors: {
        black: "#262626",
        "gray-bg": "#FAFAFA",
        "gray-text": "#8F8F8F",
        link: "#0095F6",
        story: "#D92C7D",
      },
      padding: {
        pageX: "200px",
        pageY: "90px",
      },
    },
  },
  plugins: [],
};
