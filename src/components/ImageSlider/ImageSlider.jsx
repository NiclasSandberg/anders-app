import React, { useState, useEffect } from 'react';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import styles from './ImageSlider.module.css';
import CloseSlideButton from './CloseSlideButton';


const ImageSlider = ({ slides, pictNameBlack, pictNameColour, selectedPicture, photoTypes, pictNameArch }) => {
  const [current, setCurrent] = useState(selectedPicture);
  const [photoType, setPhotoType] = useState(photoTypes);
  const length = slides.length;
  
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };


  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  let colour;
  let black;
  let arch;
  let small = '-640';
  let medium = '-800';
  let large = '-1300';
if(photoTypes === 'colour'){
  colour = pictNameColour.map((image, index) => {
    
    if(current === index){
      console.log(index);
    return (
      <>
        {current === index && ( 
          <img 
          src={require(`../../assets/img/Frozen_Moments/Colour/${image+small}.jpg`)} 
          srcSet={`${require(`../../assets/img/Frozen_Moments/Colour/${image+small}.jpg`)} 640, 
          ${require(`../../assets/img/Frozen_Moments/Colour/${image+medium}.jpg`)} 800,
          ${require(`../../assets/img/Frozen_Moments/Colour/${image+large}.jpg`)} 1300`}
          key={setCurrent} alt='travel image' className={styles['SlideImage']}  />
        )}
       
           </>  )};
  })
} else if(photoTypes === 'black'){
  black = pictNameBlack.map((image, index) => {
    if(current === index){
      console.log(index);
    return (
      <>
        {current === index && (
          <img src={require(`../../assets/img/Frozen_Moments/${image}.jpg`)} key={setCurrent} alt='travel image' className={styles['SlideImage']}  />
        )}
           </>  )};
  })
  
} else { // KOLLLA HÄR har lagt till extra else
  arch = pictNameArch.map((image, index) => {
    if(current === index){
      console.log(index+" image: "+image);
    return (
      <>
        {current === index && (
          <img src={require(`../../assets/img/Architecture/${image}.jpg`)} key={setCurrent} alt='travel image' className={styles['SlideImage']}  />
        )}
           </>  )};
  })
}

  return (
    

    <div className={styles['slider']}>
      <FaChevronLeft className={styles['left-arrow']} onClick={prevSlide} />
      <FaChevronRight className={styles['right-arrow']} onClick={nextSlide} />

      {colour}
      {black}
    </div>
  );
};
 {/*<div> <img src={require(`../../assets/img/Handcrafted/${image}.jpg`)} key={index} alt='travel image' className='image' /></div>
          
          <div
            className={index === current ? 'slide active' : 'slide'}
        key={index}
          >*/}
export default ImageSlider;