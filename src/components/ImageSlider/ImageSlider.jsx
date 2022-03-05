import React, { useState, useEffect } from 'react';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import styles from './ImageSlider.module.css';
import CloseSlideButton from './CloseSlideButton';


const ImageSlider = ({ slides, pictName, selectedPicture }) => {
  const [current, setCurrent] = useState(selectedPicture);
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
  

 

  return (
    

    <div className={styles['slider']}>
      <FaChevronLeft className={styles['left-arrow']} onClick={prevSlide} />
      <FaChevronRight className={styles['right-arrow']} onClick={nextSlide} />
    
      {pictName.map((image, index) => {
        if(current === index){
          console.log(index);
        
        
        return (
          <>
          {/*<div> <img src={require(`../../assets/img/Handcrafted/${image}.jpg`)} key={index} alt='travel image' className='image' /></div>
          */}
          {/*<div
            className={index === current ? 'slide active' : 'slide'}
        key={index}
          >*/}
          
            {current === index && (
              
              <img src={require(`../../assets/img/Frozen_Moments/${image}.jpg`)} alt='travel image' className={styles['SlideImage']} />
              
            )}
               </>  )};
          
      })}
    </div>
  );
};

export default ImageSlider;