import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import styles from './WrittenWords.module.css';
import Speed_of_Life from '../../assets/img/Written_Words/Speed_of_life.jpg';
import WTC_Skyline_Rendering from '../../assets/img/Written_Words/WTC_Skyline_Rendering.jpg'
import Container from '../../components/Container/Container.jsx';
import Forest from '../../assets/img/Architecture/The-Forest-Edge-House-croped43.jpg';
import Fairy from '../../assets/img/Architecture/The_Fairy_Tale_Tower_croped.jpg';


const WrittenWords = () => {
    return (
        <div>
            <Container>
                <div className={styles['img-container']}>
                    <Link to="/speed-of-life" >
                    <div className={styles['gallery-item']}> 
                        <img src={Speed_of_Life} alt="" />
                        <p>An Apartment With a View</p>
                       </div>
                    </Link>


                    <div className={styles['gallery-item']}>
                        <img src={WTC_Skyline_Rendering} alt="" />
                        <p>An Apartment With a View</p>
                    </div>

                    <div className={styles['gallery-item']}>
                        <img src={Fairy} alt="" />
                        <p>An Apartment With a View</p>
                    </div>

                    <div className={styles['gallery-item']}>
                        <img src={WTC_Skyline_Rendering} alt="" />
                        <p>An Apartment With a View</p>
                    </div>

                    <div className={styles['gallery-item']}>
                        <img src={Forest} alt="" />
                        <p>An Apartment With a View</p>
                    </div>

                    <div className={styles['gallery-item']}>
                        <img src={Forest} alt="" />
                        <p>An Apartment With a View</p>
                    </div>

                </div>
            </Container>
        </div>
    )
}

export default WrittenWords
