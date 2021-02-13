import React, { Component } from 'react'
import Tools from '../../assets/img/Handcrafted/Tools_at_the_Ready.jpg';
import Container from '../../components/Container/Container';
import styles from './Handcrafted.module.css';
import Sauna from '../../assets/img/Handcrafted/Sauna_Taina.jpg';
import ImageSlider from './ImageSlider';


export default class Handcrafted extends Component {

    state = {
        showGallery: false,
        showSlide: false,
        SelectedPic: null
      };
      
    hideTools = () => {
        this.setState({
            showGallery: !this.state.showGallery})
    }

    hideCarousel = () => {
        this.setState({
            showSlide: false})
    }
    

    showSlide = ( index ) => {
        this.setState({
            showSlide: true,
            SelectedPic: index
        })
        
    }

    render() {
        let hideit = this.state.showGallery ? "hideClass" : 'tools-container';
        let showImages = this.state.showGallery ? "img-container" : "hideClass";
        let noSpace = '';
        
      
        const array = ["Sauna_Taina","Outdoor_Furniture","Timberframe_I-II","Timberframe_III","Timberframe_IV"];
        
        const images = array.map((image, index) => {
            noSpace = image.replaceAll('_', ' ');
    
            return <div className={styles['gallery-item']} onClick={() => {this.showSlide(index)}} key={index} > <img src={require(`../../assets/img/Handcrafted/${image}.jpg`)} /> <p>{noSpace}</p></div>
             
        })
        let showSlide = this.state.showSlide ? <ImageSlider slides={images} pictName={array} selectedPicture={this.state.SelectedPic}/> : null;

    return (
        <div>
            <Container>
            <button label="click" onClick={this.hideCarousel} >Remove Carousel</button>
            <div onClick={this.hideTools}  className={styles[hideit]}>
            
            <img src={Tools} alt="tools" className={styles['tools']}/>
            <p>Tools at the Ready</p>
            </div>
            <div className={styles[showImages]}>
            
            {images}
           
            </div>
            {showSlide}
            {/*<ImageSlider slides={SliderData} />*/}
            </Container>
            
        </div>
    )
}
}


