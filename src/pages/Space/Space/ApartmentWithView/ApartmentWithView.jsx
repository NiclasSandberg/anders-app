import React from 'react'
import styles from './Apartment.module.css';
import Maria_1 from '../../../../assets/img/An_apartment_with_a_view/Maria_1.jpg';
import Maria_2 from '../../../../assets/img/An_apartment_with_a_view/Maria_2.jpg';
import Maria_3 from '../../../../assets/img/An_apartment_with_a_view/Maria_3.jpg';
import Maria_4 from '../../../../assets/img/An_apartment_with_a_view/Maria_4.jpg';
import Maria_5 from '../../../../assets/img/An_apartment_with_a_view/Maria_5.jpg';
import Maria_6 from '../../../../assets/img/An_apartment_with_a_view/Maria_6.jpg';
import Maria_7 from '../../../../assets/img/An_apartment_with_a_view/Maria_7.jpg';
import Maria_8 from '../../../../assets/img/An_apartment_with_a_view/Maria_8.jpg';

import { Link } from 'react-router-dom';


const ApartmentWithView = () => {
    
    return (
        <div>
            
            <div className={styles["Space_container"]}>
            <div className={styles["Row"]}>
            <div className={styles["Col"]}>
            <img className={styles["Pictures"]} src={Maria_1} alt=""/>
            </div>
            <div className={styles["Col"]}>
            <img className={styles["Pictures"]} src={Maria_2} alt=""/>
            </div>
            <div className={styles["Col"]}>
                
            <img className={styles["Pictures"]} src={Maria_3} alt=""/>
            </div>
            
            </div>
            <div className={styles["ProjectText"]}>
            <p>A sublime material palette in light hues of ash planks, birch veneer and microcement flooring characterizes this gut renovation of an apartment from the 80’s.
            <br /> <br />The attention to details could be found in the custom designed bookshelf, kitchen and wardrobes. The latter ones are integrated with the wall panels throughout this 3 bedroom apartment. The social area has been vastly expanded through cleverly hidden sliding and swinging wallpanels</p>
            </div> 
            <div className={styles["Row"]}>
            <div className={styles["Col"]}>
            <img className={styles["Pictures"]} src={Maria_4} alt=""/>
            </div>
            <div className={styles["Col"]}>
            <img className={styles["Pictures"]} src={Maria_5} alt=""/>
            </div>
            </div>
            <div className={styles["Row"]}>
            <div className={styles["Col"]}>
            <img className={styles["Pictures"]} src={Maria_6} alt=""/>
            </div>
            <div className={styles["Col"]}>
            <img className={styles["Pictures"]} src={Maria_7} alt=""/>
            </div>
            <div className={styles["Col"]}>
            <img className={styles["Pictures"]} src={Maria_8} alt=""/>
            </div>
            </div>
            </div>
        </div>
    )
}

export default ApartmentWithView;