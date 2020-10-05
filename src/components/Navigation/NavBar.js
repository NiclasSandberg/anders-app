import React from 'react'
import styles from './NavBar.module.css';
import './MobileNav/DrawerToggleButton';
import DrawerToggleButton from './MobileNav/DrawerToggleButton';


const navBar = props =>  (

    <nav className="App">
      
        <nav className={styles["toolbar_navigation"]}>
          <div className={styles["brand"]} style={{color:"#808080"}}>
            <a href="#">CURMAN WADMAN ARCHITECTS</a> </div>
         
          <DrawerToggleButton click={props.drawerClickHandler} burgerColorToggle={props.newBurgerColor}/>
          
          <div className={styles["toolbar-navigation-items"]}>
          <ul>
            <li>
              <a href="#">Studio</a>
            </li>
            <li>
              <a href="#">Space</a>
            </li>
          </ul>
          </div>
        </nav>
      </nav>
      
);

export default navBar;
