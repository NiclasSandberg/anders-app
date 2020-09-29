import React from 'react'
import style from './SideDrawer.module.css';

const sideDrawer = props => (


    <nav className={style['side-drawer']}>
        <ul className={style['side-drawer__brand']}>
           <li>
               <a href="">CURMAN WADMAN ARCHITECTS</a></li>
        </ul>
        <ul className={style['side-drawer__items']}>
            <li style={{borderTop: "1px solid #a2a2a2"}}><a href="">Studio</a></li>
            <li><a href="">Space</a></li>
        </ul>
    </nav>
);


export default sideDrawer;
