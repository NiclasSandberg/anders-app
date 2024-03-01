import React, { Component, createRef } from "react";
import styles from "./Frozen_Moments.module.css";
import Container from "../../components/Container/Container";
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import CloseSlideButton from "../../components/ImageSlider/CloseSlideButton";

export default class Colour extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }
    
    state = {
        showGallery: true,
        showSlide: false,
        SelectedPic: null,
        theposition: ""
    };
    
    componentDidUpdate() {
        console.log('component did update - Frozemoments.js')
        if (
            this.state.showGallery ? window.scrollTo(0, this.state.theposition) 
            : null
        );
       
    }

    showGallery = () => {
        this.setState({
            showGallery: true,
            showSlide: false
        });   
    };

    showSlide = (index) => {
        const winScroll =
            document.body.scrollTop || document.documentElement.scrollTop;

        this.setState({
            theposition: winScroll,
            showSlide: true,
            SelectedPic: index,
            showGallery: false,
        });
        window.scrollTo(0, 0);
    };
    
    render() {
        
        let noSpace = ""; 
        let showImages = this.state.showGallery ? "img-container" : "hideClass";
        let small = '-640';
        let medium = '-800';
        let large = '-1300';

        const array = [
            "Ektorpsgården" ,"Wattle-and-Daub", "Juniper-Ladder", "Södra-Råda", "Bell-Tower", "Gallejaur" 
        ];
{/*"1","2","3","4","5","6","7","8","9","10","11","12","13","14"*/}
        const images = array.map((image, index) => {
            noSpace = image.replace(/-/g, " ");

            return (
                <div
                    className={styles["gallery-item"]}
                    onClick={() => {
                        this.showSlide(index);
                    }}
                    key={index}
                >
                    <img 
                        srcSet={`${require(`../../assets/img/Frozen_Moments/Colour/${image+small}.jpg`)} 640w, 
                        ${require(`../../assets/img/Frozen_Moments/Colour/${image+medium}.jpg`)} 800w,
                        ${require(`../../assets/img/Frozen_Moments/Colour/${image+large}.jpg`)} 1300w`}
                        src={require(`../../assets/img/Frozen_Moments/Colour/${image+large}.jpg`)}
                        key={index}
                        alt={array[index]}
                    />
                    
                    {/*<img 
                        srcSet={`${require(`../../assets/img/Frozen_Moments/Colour/${image+small}.jpg`)} 640w, 
                        ${require(`../../assets/img/Frozen_Moments/Colour/${image+small}.jpg`)} 800w,
                        ${require(`../../assets/img/Frozen_Moments/Colour/${image+medium}.jpg`)} 5000w`}
                        src={require(`../../assets/img/Frozen_Moments/Colour/${image+large}.jpg`)}
                        key={index}
                /> */}
                    <p>{noSpace}</p>
                </div>
            );
        });

        let showSlide = this.state.showSlide ? (
            <>
                <ImageSlider
                    slides={images}
                    pictNameColour={array}
                    selectedPicture={this.state.SelectedPic}
                    photoTypes={'colour'}
                />
                <CloseSlideButton
                    tryckte={() => {
                        this.showGallery();
                    }}
                />{" "}
            </>
        ) : null;

        return (
            <Container>
                <div className={styles[showImages]}>{images}</div>
                {showSlide}
            </Container>
        );
    }
}
