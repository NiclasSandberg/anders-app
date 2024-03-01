import React, { useState, useRef, useCallback } from "react";
import style from "./SideDrawer.module.css";
import Oakleaf from "../../../assets/img/oakleaf.jpg";
import { Link, NavLink, useRouteMatch } from "react-router-dom";

const SideDrawer = (props) => {
  const [isActiveFroz, setActiveFroz] = useState(props.openFroz);
  const [isActiveMind, setActiveMind] = useState(props.openMind);
 
  const toggleClassFroz = () => {
    console.log('toggle class FROZ');
  
    setActiveFroz(!isActiveFroz);
  };

  const toggleClassMind = () => {
    setActiveMind(!isActiveMind);
  };
  console.log('rerendering SIDEDRAWER');
  return (
    <>
    <nav className={style["side-drawer"]}>
      <ul className={style["side-drawer__brand"]}>
      <div onClick={props.clickedNoneSubMenu}>
        <li>
          <Link onClick={props.clicked} to="/">
            CURMAN WADMAN{" "}
            <span className={style["break-mobile"]}>ARCHITECTURE & CRAFT</span>
          </Link>
        </li>
        </div>
      </ul>
      <div className={style["side-drawer-layout"]}>
        <ul className={style["side-drawer__items"]}>
        <div onClick={props.clickedNoneSubMenu}> <li
            onClick={props.clicked}
            style={{ borderTop: "1px solid #a2a2a2" }}
          >
            <Link to="/architecture">Architecture</Link>
          </li>
          <li onClick={props.clicked}>
            <Link to="/craft">Craft</Link>
            </li>
            </div>
         <div onClick={props.clickedSubMenuFroz}> <li onClick={() => {    
          toggleClassFroz()
        }} > <span className={style['dropDownTitle']}>Frozen Moments</span></li></div>
          <div className={style[isActiveFroz ? 'showFroz' : 'hideFroz']}>
          <li onClick={props.clicked}><Link to="/frozen-moments/black-white">Black & White</Link></li>
          <li onClick={props.clicked}><Link to="/frozen-moments/colour">Colour</Link></li>
          </div>
          <div onClick={props.clickedSubMenuMind}>
          <li onClick={() => {    
          toggleClassMind()}}> 
          <span className={style['dropDownTitle']}>Mind of an Architect</span></li></div>
          <div className={style[isActiveMind ? 'showMind' : 'hideMind']}>
            <li onClick={props.clicked}><Link to="/mind-of-an-architect/beauty"><span>Beauty</span></Link></li>
            <li onClick={props.clicked}><Link to="/mind-of-an-architect/keep-on-dreaming"><span>Keep on Dreaming</span></Link></li>
            <li onClick={props.clicked}><Link to="/mind-of-an-architect/on-architecture"><span>On Architecture</span></Link></li>
          </div>
          <div onClick={props.clickedNoneSubMenu}>
          <li onClick={props.clicked}>
            <NavLink to="/studio">Studio</NavLink>
          </li>
          <li onClick={props.clicked}>
            <NavLink to="/written-words">Written Words</NavLink>
          </li>
          </div>
          {/*<li><NavLink to="/architecture-rutor" >Archrutor</NavLink></li>*/}
        </ul>

        <div className={style["leaf-container"]}>
          <img src={Oakleaf} className={style["oakleaf"]} alt="Eklöv" />
        </div>
      </div>
    </nav>
    </>
  );
};

export default SideDrawer;
