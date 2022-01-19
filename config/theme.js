import { createTheme } from "@nextui-org/react";

const myDarkTheme = createTheme({
  type: "dark",
  theme: {
    colors: {
      // brand colors
      // brand colors
      background: "#1d1d1d",
      text: "#fff",
      // you can also create your own color
      myDarkColor: "#ff4ecd",
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
      // you can also create your own color
      myDarkColor: "#ff4ecd",
    },
    space: {},
    fonts: {},
  },
});

export { myDarkTheme, myLighTheme };
