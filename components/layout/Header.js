import { Grid, Text, Link } from "@nextui-org/react";
import { FiAlignRight } from "react-icons/fi";
import ThemeSwitcher from "../theme-switcher/theme-switcher";
import NavItems from "./nav-items";
// redux
import { useDispatch } from "react-redux";
// redux actions
import { closeDrawer, openDrawer } from "../../redux/mobile-drawer/actions";

// styles
import style from "./header.module.css";

function Header() {
  const dispatch = useDispatch();
  return (
    <Grid.Container gap={2} justify="center" className={style.header__outer}>
      <Grid
        xs={10}
        sm={2}
        md={2}
        lg={2}
        justify="flex-start"
        alignItems="center"
      >
        <Text
          h1
          size={40}
          sm={"false"}
          css={{
            textGradient: "45deg, $error -20%, $secondary 50%",
          }}
          weight="bold"
        >
          Webectro
        </Text>
      </Grid>
      <Grid xs={0} sm={8} md={8} lg={8} justify="center" alignItems="center">
        <NavItems />
      </Grid>
      <Grid xs={2} sm={2} md={2} lg={2}>
        <Grid.Container>
          <Grid xs={6} sm={12} justify="flex-end" alignItems="center">
            <ThemeSwitcher />
          </Grid>
          <Grid xs={6} sm={0} justify="flex-end" alignItems="center">
            <Link
              color={"secondary"}
              onClick={(e) => {
                e.preventDefault();
                dispatch(openDrawer());
              }}
              href="#"
            >
              <FiAlignRight style={{ fontSize: 32 }} />
            </Link>
          </Grid>
        </Grid.Container>
      </Grid>
    </Grid.Container>
  );
}

export default Header;
