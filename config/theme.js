import { createTheme } from "@nextui-org/react";

const myDarkTheme = createTheme({
  type: "dark",
  theme: {
    colors: {
      // brand colors
      // brand colors
      background: "#1d1d1d",
      text: "#fff",
      bg: "#000",
      // you can also create your own color
      myDarkColor: "#ff4ecd",
      blurBackground: "rgba(0, 0, 0, 0.6)",
    },
    space: {},
    fonts: {},
  },
});
const myLighTheme = createTheme({
  type: "light",
  theme: {
    colors: {
      // brand colors
      // brand colors
      background: "#ddd",
      text: "#000",
      bg: "#fff",
      // you can also create your own color
      myDarkColor: "#ff4ecd",
      blurBackground: "rgba(225, 225, 225, 0.6)",
    },
    space: {},
    fonts: {},
  },
});

export { myDarkTheme, myLighTheme };
