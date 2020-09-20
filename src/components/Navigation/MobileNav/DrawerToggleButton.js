import React from 'react'
import style from './DrawerToggleButton.module.css';

const drawerToggleButton =  props => {
        
        
        let changeColor = 'toggle-button__line';
        let rotate = 'top';
        if(props.burgerColorToggle){
                changeColor = 'toggle-button__line_open';
                rotate = 'top_open';
        }
        return(
        <button className={style["toggle-button"]} onClick={props.click}>
        <div className={`${style[changeColor]} ${style[rotate]}`}></div>
        <div className={style[changeColor]}></div>
        </button>
);};


export default drawerToggleButton;
