import React, { Component } from 'react'
import styles from './Architecture.module.css';
import Container from '../../components/Container/Container';
import ImageSlider from './ImageSlider';
import Overlay from '../../components/Navigation/Overlay';
import CloseSlideButton from './CloseSlideButton';
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
            showSlide: false
        })
    }

    render() {


        let noSpace = ''; // ändra sen class skicka med till overlay o så..
        let showImages = this.state.showGallery ? "img-container" : "hideClass";


        const array = ["A1", "A2", "A3", "A4", "A5","A6", "A7", "A8", "A9", "A10", "A11", "A12"];
        const array2 = ["A2", "A3", "A4", "A5","A6", "A7", "A8", "A9", "A10", "A11", "A12"];

        
        const mobileImages = array2.map((image, index) => {
            return  <div className={styles['mobileImages']}key={index} ><img src={require(`../../assets/img/Architecture/${image}.jpg`)} /></div>

        });
        const images = array.map((image, index) => {
            noSpace = image.replaceAll('_', ' ');

            return <div className={styles['gallery-item']} onClick={() => { this.showSlide(index) }} key={index} > <img src={require(`../../assets/img/Architecture/${image}.jpg`)} /> <p>{noSpace}</p></div>

        })
        let showSlide = this.state.showSlide ? <>
            <ImageSlider slides={images} pictName={array} selectedPicture={this.state.SelectedPic} />
            <CloseSlideButton tryckte={() => { this.showGallery() }} /> </> : null;

        return (
            <div>
                <Container>

                    <div className={styles[showImages]}>

                        {images.[0]}            
                    </div>
                    <div className={styles['mobileImages']}><img src={Start_image} alt="" /></div>
                    <div className={styles['text-container']}>
                    <div className={styles['text-row']}>
                        
                        <div className={styles['text-column']}>
                            <p>A sublime material palette in light hues of ash planks, birch veneer, limestone and microcement flooring characterizes this gut renovation and transformation of an apartment from the 80’s. The close attention to details could be found throughout in the angled cabinet doors of the custom designed built-in bookshelves as well as the dovetails of the kitchen drawers, frameless floor to ceiling doors, minimal door handles and concealed wardrobes integrated in the wall panels. The social area has been vastly expanded through cleverly hidden sliding and swinging wallpanels. </p>
                        </div>
                        <div className={styles['text-column']}>
                        
                            <p>A sublime material palette in light hues of ash planks, birch veneer, limestone and microcement flooring characterizes this gut renovation and transformation of an apartment from the 80’s. The close attention to details could be found throughout in the angled cabinet doors of the custom designed built-in bookshelves as well as the dovetails of the kitchen drawers, frameless floor to ceiling doors, minimal door handles and concealed wardrobes integrated in the wall panels. The social area has been vastly expanded through cleverly hidden sliding and swinging wallpanels. </p>   
                            </div>
                            
                           
                            <div className={styles['text-row']}>
                            <div className={styles['single-column']}> 
                            <p style={{fontSize: '18px'}}>Scope of work: </p>
                        <li>Architectural services including building permit, bid set, construction documents and shop drawings
                        </li>
                        <li>Project and production management including procurement of consultants and eight contractors, site management / supervision.
                        </li>
                        </div>
                        </div>
                        </div>
                        </div>
                        {mobileImages}
                    
                    {showSlide}

                </Container>
            </div>
        )
    }
}
