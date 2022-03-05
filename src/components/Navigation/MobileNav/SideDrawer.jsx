import React, { useState, useRef, useCallback } from "react";
import style from "./SideDrawer.module.css";
import Oakleaf from "../../../assets/img/oakleaf.jpg";
import { Link, NavLink, useRouteMatch } from "react-router-dom";

const SideDrawer = (props) => {
  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };

  return (
    <nav className={style["side-drawer"]}>
      <ul className={style["side-drawer__brand"]}>
        <li>
          <Link onClick={props.clicked} to="/">
            CURMAN WADMAN{" "}
            <span className={style["break-mobile"]}>ARCHITECTURE & CRAFT</span>
          </Link>
        </li>
      </ul>
      <div className={style["side-drawer-layout"]}>
        <ul className={style["side-drawer__items"]}>
          <li
            onClick={props.clicked}
            style={{ borderTop: "1px solid #a2a2a2" }}
          >
            <Link to="/architecture">Architecture</Link>
          </li>
          <li onClick={props.clicked}>
            <Link to="/craft">Craft</Link>
          </li>
          <li onClick={props.clicked}><Link to="/frozen-moments">Frozen Moments</Link></li>
          <li onClick={toggleClass} className={style[isActive ? 'mind-of-architect' : null]}> <span style={{ cursor: 'pointer' }}>Mind of an Architect</span></li>
          <div className={style[isActive ? 'cont2' : 'cont']}>
            <li className={style['mind-of-archiect']}><Link to="/architecture"><span>Beauty</span></Link></li>
            <li><Link to="/architecture"><span>Keep on Dreaming</span></Link></li>
            <li><Link to="/architecture"><span>On Architecture</span></Link></li>
            <li><Link to="/architecture"><span>Slowtecture</span></Link></li>

          </div>
          <li onClick={props.clicked}>
            <NavLink to="/studio">Studio</NavLink>
          </li>
          <li onClick={props.clicked}>
            <NavLink to="/written-words">Written Words</NavLink>
          </li>

          {/*<li><NavLink to="/architecture-rutor" >Archrutor</NavLink></li>*/}
        </ul>

        <div className={style["leaf-container"]}>
          <img src={Oakleaf} className={style["oakleaf"]} alt="Eklöv" />
        </div>
      </div>
    </nav>
  );
};

export default SideDrawer;
