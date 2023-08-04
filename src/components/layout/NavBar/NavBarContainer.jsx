import React, { useState } from "react";
import NavBar from "./NavBar";

const NavBarContainer = () => {
  const [display, setDisplay] = useState("none");
  return <NavBar display={display} setDisplay={setDisplay} />;
};

export default NavBarContainer;
