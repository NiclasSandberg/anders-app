import React, { Component } from 'react'
import styles from './Architecture.module.css';
import Container from '../../components/Container/Container';
import ImageSlider from '../../components/ImageSlider/ImageSlider';
import Overlay from '../../components/Navigation/Overlay';
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
            <div>
                
                <Container>
                {showOverlay}
                    <div className={styles[showImages]}>

                        {images[0]}            
                    </div>
                    <div className={styles['mobileImages']}><img src={Start_image} alt="" /></div>
                    <div className={styles['text-container']}>
                    <p style={{textAlign: 'center', fontStyle: 'italic'}}>Under construction: Architectural projects to be launched on the web page in Q2 2022.</p>
                    <h1 style={{fontSize: '1.125rem', marginBottom: '0px', marginTop:"1rem"}}>An Apartment with a View</h1>
                    <div className={styles['text-row']}>
                        
                        <div className={styles['text-column']}>
                            <p>A sublime material palette in light hues of ash planks, birch veneer, limestone and microcement flooring characterizes this gut renovation and transformation of an apartment from the 1980’s.</p>
                            <p>A narrow, wooden passage transitions from the foyer to the extended social area. The latter has been vastly expanded through cleverly hidden sliding and swinging wall panels. The new layout also enhances the daylight and offers cross views from every room.</p>
                        </div>
                        
                        <div className={styles['text-column']}>
                            <p>A stone block leads to a slightly raised platform in the rear of the living room, referencing the refined stone gardens of traditional Japanese temples. The platform’s seating offers a magnificent, unobstructed view of the world renown City Hall, which hosts the Nobel Laureates’ dinner every year. </p>   
                            <p>Close attention to detail is found throughout the apartment: in the angled cabinet doors of the custom designed built-in bookshelves, the dovetails of the kitchen drawers, frameless floor-to-ceiling doors, minimal door handles, recessed base boards and concealed wardrobes integrated in the wall panels. </p>
                        </div>
                            
                           
                            <div className={styles['text-row']}>
                            <div className={styles['single-column']}> 
                            <h2>Scope of work: </h2>
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
