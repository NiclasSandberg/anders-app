import React, { Component } from 'react'
import styles from './Frozen_Moments.module.css';
import Container from '../../components/Container/Container';
import ImageSlider from './ImageSlider';
import Overlay from '../../components/Navigation/Overlay';
import CloseSlideButton from './CloseSlideButton';

export default class Frozen_Moments extends Component {
    state = {
        showGallery: true,
        showSlide: false,
        SelectedPic: null,
        showOverlay: false
    };

    showSlide = (index) => {
        this.setState({
            showSlide: true,
            SelectedPic: index,
            showOverlay: true,
            showGallery: false
        })
    }
    showGallery = () => {
        this.setState({
            showGallery: true,
            showSlide:false
        })
    }
    
    render() {
        
       
        let noSpace = ''; // ändra sen class skicka med till overlay o så..
        let showImages = this.state.showGallery ? "img-container" : "hideClass";
       
        
        const array = ["Seascape_I", "Seascape_II", "Seascape_III", "To_the_Upper_Floor", "The_Hotel", "Shingles"];

        const images = array.map((image, index) => {
            noSpace = image.replaceAll('_', ' ');

        return <div className={styles['gallery-item']} onClick={() => { this.showSlide(index) }} key={index} > <img src={require(`../../assets/img/Frozen_Moments/${image}.jpg`)} /> <p>{noSpace}</p></div>

        })
        let showSlide = this.state.showSlide ? <>  
        <ImageSlider slides={images} pictName={array} selectedPicture={this.state.SelectedPic} /> 
        <CloseSlideButton tryckte={ () => {this.showGallery()}}/> </> : null;
       
        return (
            <div>
                <Container>
                   
                    <div className={styles[showImages]}>
                        {images}
                    </div>
                    {showSlide}
                    
                </Container>
            </div>
        )
    }
}
