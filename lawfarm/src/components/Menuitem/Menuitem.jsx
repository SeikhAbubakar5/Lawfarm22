import React from "react";
import styles from "./Menuitem.module.css";
const Menuitem = () => {
  return (
    
      <ul className={styles.items}>
        <li>Home</li>
        <li>Attorneys</li>
        <li>Practice Areas</li>
        <li>About Us</li>
      </ul>
   
  );
};

export default Menuitem;
