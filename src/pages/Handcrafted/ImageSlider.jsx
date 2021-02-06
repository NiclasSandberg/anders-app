import React, { useState } from 'react';
import { SliderData } from './SliderData';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import Handcrafted from './Handcrafted';

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
    

    <section className='slider'>
      <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
      <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
     
      
      {pictName.map((image, index) => {
        if(current === index){
          console.log(index);
        
        
        return (
          <>
          {/*<div> <img src={require(`../../assets/img/Handcrafted/${image}.jpg`)} key={index} alt='travel image' className='image' /></div>
          */}
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {current === index && (
              <img src={require(`../../assets/img/Handcrafted/${image}.jpg`)} alt='travel image' className='image' />
            )}
          </div>      </>  )};
          
      })}
    </section>
  );
};

export default ImageSlider;