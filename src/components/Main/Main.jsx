import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Space from '../../pages/Space/Space/Space';
import HeaderComp from '../HeaderComp/HeaderComp';
import Studio from '../../pages/Studio/Studio';

import styles from './Main.module.css';

const Main = ( props ) => {
    console.log(props.children);
    return (
        <div style={{marginTop: "30vh"}}>
            {props.children}
        </div>
    )
}

export default Main
