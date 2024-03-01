import React from "react";
import styles from "./NavBar.module.css";
import "./MobileNav/DrawerToggleButton";
import DrawerToggleButton from "./MobileNav/DrawerToggleButton";
import { Link } from "react-router-dom";

const navBar = (props) => (
  
    <nav className={styles["toolbar_navigation"]}>
      <div className={styles["brand"]} style={{ color: "#808080" }}>
        <li>
          <Link to="/">
            CURMAN WADMAN{" "}
            <span className={styles["break-mobile"]}>ARCHITECTURE & CRAFT</span>
          </Link>
        </li>
      </div>

      <DrawerToggleButton
        click={props.drawerClickHandler}
        sideDrawerIsOpen={props.sideDrawerIsOpen}
      />
    </nav>
  
);

export default navBar;
