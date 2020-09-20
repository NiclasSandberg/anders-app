import React from 'react'
import style from './SideDrawer.module.css';

const sideDrawer = props => (
        

        <nav className={style['side-drawer']}>
            <ul className={style['side-drawer__items']}>
                <li><a href="">ANDERS WADMAN</a></li>
                <li><a href="">Studio</a></li>
                <li><a href="">Spaces</a></li>
            </ul>
        </nav>
);


export default sideDrawer;
