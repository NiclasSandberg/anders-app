import React from 'react'
import styles from './ArchitectureRutor.module.css';
import Apartment_View from '../../assets/img/Architecture/An_Apartment-with_a_View_800-croped43.jpg';
import Island_Workshop from '../../assets/img/Architecture/The Island Workshop.jpg'
import Container from '../../components/Container/Container.jsx';
import Forest from '../../assets/img/Architecture/The-Forest-Edge-House-croped43.jpg';
import Fairy from '../../assets/img/Architecture/The_Fairy_Tale_Tower_croped.jpg';


const Architecture = () => {
    return (
        <div>
            <Container>
                <div className={styles['img-container']}>
                    <div className={styles['gallery-item']}>
                        <img src={Apartment_View} alt="" />
                        <p>An Apartment With a View</p>
                    </div>


                    <div className={styles['gallery-item']}>
                        <img src={Forest} alt="" />
                        <p>An Apartment With a View</p>
                    </div>

                    <div className={styles['gallery-item']}>
                        <img src={Fairy} alt="" />
                        <p>An Apartment With a View</p>
                    </div>

                    <div className={styles['gallery-item']}>
                        <img src={Island_Workshop} alt="" />
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

export default Architecture
