import { Outlet } from "react-router-dom";

import Footer from "./Footer/Footer";
import NavBarContainer from "./NavBar/NavBarContainer";

const Layout = () => {
  return (
    <>
      <NavBarContainer />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
