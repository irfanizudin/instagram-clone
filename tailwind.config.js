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
      lg: ["16px", "24px"],
      xl: ["24px", "32px"],
      "2xl": ["28px", "34px"],
    },
    extend: {
      colors: {
        black: "#262626",
        "gray-bg": "#FAFAFA",
        "gray-text": "#8F8F8F",
        link: "#0095F6",
        story: "#D92C7D",
        liked: "#ED4956",
      },
      padding: {
        pageX: "200px",
        pageY: "90px",
      },
    },
  },
  plugins: [],
};
