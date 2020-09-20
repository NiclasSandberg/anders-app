import React from 'react'
import style from './NavBar.module.css';
import './MobileNav/DrawerToggleButton';
import DrawerToggleButton from './MobileNav/DrawerToggleButton';



const navBar = props =>  (

    <nav className="App">
        <nav className={style["toolbar_navigation"]}>
          <div className={style["brand"]} style={{color:"#808080"}}>CURMAN ARKITEKTUR & BYGGNADSVÅRD</div>
         
          <DrawerToggleButton click={props.drawerClickHandler} burgerColorToggle={props.newBurgerColor}/>
          
          <div className={style["toolbar-navigation-items"]}>
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
