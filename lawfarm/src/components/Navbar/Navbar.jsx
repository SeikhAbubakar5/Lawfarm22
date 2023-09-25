import React from "react";
import styles from "./Navbar.module.css";
import Menuitem from "../Menuitem/Menuitem";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";

const Navbar = () => {
  return (
    <>
      <nav className={styles.navitem}>
        <Logo />
        <Menuitem />
        <Button children="Contact Now" />
      </nav>
    </>
  );
};

export default Navbar;
