import React, { Component } from 'react'
import Container from '../../components/Container/Container';
import styles from './Handcrafted.module.css';
import ImageSliderCrafted from './ImageSliderCraft';
import CloseSlideButton from '../Architecture/CloseSlideButton';
import Start_image from '../../assets/img/Handcrafted/C1.jpg';


export default class Handcrafted extends Component {

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


        const array = ["C1", "C2", "C3", "C4", "C5", "C6", "C7", "C8", "C9","C10", "C11"];
        const array2 = ["C2", "C3", "C4", "C5", "C6", "C7", "C8", "C9","C10", "C11"];


        const mobileImages = array2.map((image, index) => {
            return <div className={styles['mobileImages']} key={index} ><img src={require(`../../assets/img/Handcrafted/${image}.jpg`)} /></div>

        });
        const images = array.map((image, index) => {
            noSpace = image.replaceAll('_', ' ');

            return <div className={styles['gallery-item']} onClick={() => { this.showSlide(index) }} key={index} > <img src={require(`../../assets/img/Handcrafted/${image}.jpg`)} /> <p>{noSpace}</p></div>

        })
        let showSlide = this.state.showSlide ? <>
            <ImageSliderCrafted slides={images} pictName={array} selectedPicture={this.state.SelectedPic} />
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
                                <p>Restoration of mansion from 1789 in Västerbotten, Sweden.

                                    All the walls are covered with lump cardboard (lumppapp in Swedish), teared by hand from rolls to over 300 sheets, 50x60 cm. Four layers of old wall papers were first torn down.

                                    All walls, doors, baseboards and mouldings are painted with eggoil tempera mixed by hand with ecological eggs, linseed oil, water and eggoil pigments. The eggoil tempera for the doors, baseboards and mouldings have a larger percentage of eggoil to give it a resistant gloss. After four weeks of oxidation it will be brushed by hand for an extra resistant gloss.
                                </p>
                                <p>The dropped ceilings in both rooms were removed and the original ceiling planks repainted with distemper (limfärg in Swedish) mixed by hand with chalk (krita in Swedish) bone glue and water. Halfoil (half linseed oil paint and half balsam terpentin) was used as a primer. </p>
                            </div>
                            <div className={styles['text-column']}>

                                <p>The original ceiling planks were originally white but had over time become grey by the soot from the wood burning kitchen stove and tiled stove. The old distemper was first meticulously removed by dissolving it with wallpaper glue and let it sit under gladpack (plastic foil) for 1,5 hours before scraping it away. </p>
                                <p>The windows will be replaced with original, taller and wider size with lower window sill and old hand blown window panes (kulturglas in Swedish). After the windows have been installed the stencil painting (schablonmålning in Swedish) found on the attic will be recreated with eggoil tempera paint on in the inner lightly colored room. Originally the stencil painting was painted on the ceiling in one of the main room, but will here be painted on the walls instead. </p>
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


