import { forwardRef } from "react";
// components
import { Grid, Link } from "@nextui-org/react";
import { IoClose } from "react-icons/io5";
import NavItems from "../layout/nav-items";
// redux
import { useDispatch } from "react-redux";
import { closeDrawer } from "../../redux/mobile-drawer/actions";
// styles
import style from "./style.module.css";
function MobileDrawer() {
  const dispatch = useDispatch();
  return (
    <Grid
      as="div"
      className={style.mobile_drawer}
      css={{ background: "$blurBackground" }}
    >
      <Link
        href="#"
        onClick={(e) => {
          e.preventDefault();
          dispatch(closeDrawer());
        }}
        color={"primary"}
        css={{ fontSize: 42, position: "fixed", top: 20, right: 20 }}
      >
        <IoClose />
      </Link>
      <NavItems isDrawer={true} />
      <div className={style.drawer_footer}>
        <h2>Footer</h2>
      </div>
    </Grid>
  );
}

export default forwardRef(MobileDrawer);
