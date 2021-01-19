import React from 'react'
import styles from './Space.module.css';
import Maria_1 from '../../../assets/img/An_apartment_with_a_view/Maria_1.jpg';
import Husvagn_1 from '../../../assets/img/Just_Enough/Husvagn_1.JPG';
import { Link } from 'react-router-dom';


const Space = () => {
    
    return (
        <div>
            
            <div className={styles["Space_container"]}>
            <div className={styles["Col"]}>
            <Link to="/Apartment"><img className={styles["Pictures"]} src={Maria_1} alt=""/></Link>
            <Link to="/Apartment"><p>An Apartment with a view</p></Link>
            </div>
            <div className={styles["Col"]}>
            <img className={styles["Pictures"]} src={Husvagn_1} alt=""/>
            <p>Just Enough</p>
            </div>
            </div>
        </div>
    )
}

export default Space
