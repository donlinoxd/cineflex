module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        main: ["PT Sans"],
      },
    },
  },
  variants: {
    extend: {
      fontWeight: ["hover", "focus"],
      animation: ["focus", "hover", "active"],
      transform: ["focus", "hover", "active"],
      scale: ["active", "group-hover"],
    },
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "95%",
          "@screen md": {
            maxWidth: "90%",
          },
          "@screen lg": {
            maxWidth: "85%",
          },
        },
      });
    },
  ],
};
