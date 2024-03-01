import React, { Component, createRef } from "react";
import styles from "./Frozen_Moments.module.css";
import Container from "../../components/Container/Container";
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import CloseSlideButton from "../../components/ImageSlider/CloseSlideButton";

export default class Frozen_Moments extends Component {
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

        const array = [
            "Seascape_I",
            "Seascape_II",
            "Seascape_III",
            "Shingles",
            "The_Hotel",
            "To_the_Upper_Floor",
        ];

        const images = array.map((image, index) => {
            noSpace = image.replace(/_/g, " ");

            return (
                <div
                    className={styles["gallery-item"]}
                    onClick={() => {
                        this.showSlide(index);
                    }}
                    key={index}
                >
                    <img
                        src={require(`../../assets/img/Frozen_Moments/${image}.jpg`)}
                        key={index}
                    />
                    <p>{noSpace}</p>
                </div>
            );
        });

        let showSlide = this.state.showSlide ? (
            <>
                <ImageSlider
                    slides={images}
                    pictNameBlack={array}
                    selectedPicture={this.state.SelectedPic}
                    photoTypes={'black'}
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
