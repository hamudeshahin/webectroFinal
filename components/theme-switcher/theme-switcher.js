import { Link } from "@nextui-org/react";
import { MdLightMode, MdDarkMode } from "react-icons/md";
// next themes
import { useTheme as useNextTheme } from "next-themes";
import { useTheme } from "@nextui-org/react";

function ThemeSwitcher() {
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();
  return (
    <Link
      color={isDark ? "primary" : "secondary"}
      href="#"
      onClick={(e) => {
        e.preventDefault();
        setTheme(!isDark ? "dark" : "light");
      }}
      css={{ fontSize: 24 }}
    >
      {isDark ? <MdLightMode /> : <MdDarkMode />}
    </Link>
  );
}

export default ThemeSwitcher;
