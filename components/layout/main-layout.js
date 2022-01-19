import { Fragment, useEffect, useRef } from "react";
// components
import MobileDrawer from "../mobile/mobile-drawer";
import Header from "./Header";
import { CSSTransition } from "react-transition-group";
// redux
import { useSelector, useDispatch } from "react-redux";
import { closeDrawer } from "../../redux/mobile-drawer/actions";
// styles
import style from "./layout.module.css";
function MainLayout(props) {
  // get states from redux (drawer) => O => is drawer open
  const { O } = useSelector((state) => state.drawer);
  const dispatch = useDispatch();

  const drawerRef = useRef(null);

  function handleWindowSizeChange(e) {
    if (window.innerWidth >= 960) {
      dispatch(closeDrawer());
    }
  }

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => window.removeEventListener("resize", handleWindowSizeChange);
  }, []);

  return (
    <div className="container">
      <Header />
      <main className={style.main_content}>
        <div className={style.outer}>{props.children}</div>
        <img src="/svgs/gradient-right.svg" className={style.g_right} />
        <img src="/svgs/gradient-left.svg" className={style.g_left} />
      </main>
      <footer className={style.footer}>
        <h2>Footer</h2>
      </footer>
      <CSSTransition
        in={O}
        timeout={400}
        classNames={{
          appear: style.appear,
          appearActive: style.appearActive,
          appearDone: style.appearDone,
          enter: style.enter,
          enterActive: style.enterActive,
          enterDone: style.enterDone,
          exit: style.exit,
          exitActive: style.exitActive,
          exitDone: style.exitDone,
        }}
        unmountOnExit
      >
        <MobileDrawer />
      </CSSTransition>
      {/* {O && <MobileDrawer />} */}
    </div>
  );
}

export default MainLayout;
