import MainLayout from "../components/layout/main-layout";
// next ui provider
import { NextUIProvider } from "@nextui-org/react";
// themes
import { myDarkTheme, myLighTheme } from "../config/theme";
// next themes
import { ThemeProvider as NextThemesProvider } from "next-themes";
// redux
import { Provider } from "react-redux";
import { useStore } from "../redux/index";
// styles
import "../styles/globals.css";

const layouts = {
  M: MainLayout,
};

function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);
  const Layout = layouts[Component.layout] || ((children) => <>{children}</>);

  return (
    <NextThemesProvider
      defaultTheme="system"
      attribute="class"
      value={{
        light: myLighTheme.className,
        dark: myDarkTheme.className,
      }}
    >
      <NextUIProvider>
        <Provider store={store}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Provider>
      </NextUIProvider>
    </NextThemesProvider>
  );
}

export default MyApp;
