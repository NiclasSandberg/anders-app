import React, { Component } from 'react'
import styles from './Handcrafted.module.css';
import Container from '../../components/Container/Container';
import images from '../../assets/img/Handcrafted/C3.jpg';

export default class Handcrafted extends Component {

 

    render() {

      

        return (
            <div>
                <Container>
                   
                    <div className={styles['img-container']}>
                        <img src={images} alt="" />
                    </div>
                    
                    <div className={styles['text-container']}>
                    <p>Under construction: To be launched Q2 2024</p>
                    </div>
                    

                </Container>
            </div>
        )
    }
}


