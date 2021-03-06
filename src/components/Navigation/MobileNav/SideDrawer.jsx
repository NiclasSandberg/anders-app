import React from 'react'
import style from './SideDrawer.module.css';
import Oakleaf from '../../../assets/img/oakleaf.jpg';
import { Link, NavLink } from 'react-router-dom';


const sideDrawer = props => {
    
    
    return (
        
   
        <nav className={style['side-drawer']}>
            <ul className={style['side-drawer__brand']}>
                <li>
                    <Link onClick={props.clicked}  to="/">CURMAN WADMAN <span className={style['break-mobile']}>ARCHITECTURE & CRAFT</span></Link>
                </li>
            </ul>
            <div className={style['side-drawer-layout']}>
            <ul onClick={props.clicked} className={style['side-drawer__items']}>
                <li style={{ borderTop: "1px solid #a2a2a2" }}><Link to="/architecture">Architecture</Link></li>
                <li><Link to="/frozen-moments">Frozen Moments</Link></li>
                <li><Link to="/handcrafted">Handcrafted</Link></li>
                <li><NavLink to="/studio" >Studio</NavLink></li>
                <li><Link to="/work-of-art">Work of Art</Link></li>
                
                
            </ul>
            <div className={style['leaf-container']}>
            <img src={Oakleaf} className={style['oakleaf']} alt="Eklöv" />
            </div>
            </div>
        </nav>
      
    )
};


export default sideDrawer;
