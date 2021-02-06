import React, { Component } from 'react'
import styles from './Frozen_Moments.module.css';
import Seascape_1 from '../../assets/img/Frozen_Moments/Seascape_I.jpg';
import Seascape_2 from '../../assets/img/Frozen_Moments/Seascape_II.jpg';
import Seascape_3 from '../../assets/img/Frozen_Moments/Seascape_III.jpg';
import To_Upper_Floor from '../../assets/img/Frozen_Moments/To_the_Upper_Floor.jpg';
import The_Hotel from '../../assets/img/Frozen_Moments/The_Hotel.jpg';
import Shingles from '../../assets/img/Frozen_Moments/Shingles.jpg';
import Container from '../../components/Container/Container';

export default class Frozen_Moments extends Component {
    render() {

        const array = ["Seascape_I","Seascape_II","Seascape_III","To_the_Upper_Floor","The_Hotel","Shingles"];

        const images = array.map(image => {
            return <div className={styles['gallery-item']}> <img key={image} src={require(`../../assets/img/Frozen_Moments/${image}.jpg`)} /> <p>{image}</p></div>
            
        })

        return (
            <div>
            <Container>
                <div className={styles['img-container']}>
                    
                        {images}
                        
                        

                </div>
            </Container>
        </div>
        )
    }
}
