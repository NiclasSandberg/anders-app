import React, { Component } from 'react'
import styles from './Architecture.module.css';
import Container from '../../components/Container/Container.jsx';
import ImageSlider from '../../components/ImageSlider/ImageSlider.jsx';
import Overlay from '../../components/Navigation/Overlay.jsx';
import CloseSlideButton from '../../components/ImageSlider/CloseSlideButton.jsx';
import Start_image from '../../assets/img/Architecture/A1.jpg';

export default class Architecture extends Component {
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
            showSlide: false,
            showOverlay: false
            
        })
    }
   
    render() {

        let showOverlay;
        if (this.state.showOverlay){
            showOverlay = <Overlay />
        }
        
        let noSpace = ''; // ändra sen class skicka med till overlay o så..
        let showImages = this.state.showGallery ? "img-container" : "hideClass";


        const array = ["A1", "A2", "A3", "A4", "A5","A6", "A7", "A8", "A9", "A10", "A11", "A12", "A13"];
        const array2 = ["A2", "A3", "A4", "A5","A6", "A7", "A8", "A9", "A10", "A11", "A12", "A13"];

        
        const mobileImages = array2.map((image, index) => {
            return  <div className={styles['mobileImages']}key={index} ><img src={require(`../../assets/img/Architecture/${image}.jpg`)} /></div>

        });
        const images = array.map((image, index) => {
            /*noSpace = image.replaceAll('_', ' ');*/

            return <div className={styles['gallery-item']} onClick={() => { this.showSlide(index) }} key={index} > <img src={require(`../../assets/img/Architecture/${image}.jpg`)} /> </div>

        })
        let showSlide = this.state.showSlide ? <>
            <ImageSlider slides={images} pictNameArch={array} selectedPicture={this.state.SelectedPic} />
            <CloseSlideButton  tryckte={() => { this.showGallery() }} /> </> : null;

        return (
        
                
                <Container>
                        <div className={styles['architecture-container']}>
                            <img src={require(`../../assets/img/Architecture/UNDER-CONSTRUCTION.jpg`)} alt="" />
                            <div className={styles['text-container']}>
                            <p>Under construction: To be launched Q2 2024</p>
                            </div>
                        </div>
                </Container>
          
        )
    }
}
