// components
import { Link } from "@nextui-org/react";
// data
import navsData from "../../data/header-navs";
// styles
import style from "./header.module.css";

function NavItems(props) {
  return (
    <nav className={`${style.navs} ${props.isDrawer ? style.drawer : ""}`}>
      {navsData.map((navItem) => (
        <Link
          className={style.nav_item}
          color={"primary"}
          css={{ color: "$text" }}
          key={navItem.id}
        >
          {navItem.title}
        </Link>
      ))}
    </nav>
  );
}

export default NavItems;
