import React, { useState } from 'react';
import { LightboxContent } from './Lightbox';

const ImageCarousel = ({ images }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [lightboxActive, setLightboxActive] = useState(false);

  const handlePrev = () => {
    setCurrentIdx((prevIdx) => (prevIdx === 0 ? images.length - 1 : prevIdx - 1));
  };

  const handleNext = () => {
    setCurrentIdx((prevIdx) => (prevIdx === images.length - 1 ? 0 : prevIdx + 1));
  };

  const openLightbox = () => {
    setLightboxActive(true);
  };

  const closeLightbox = () => {
    setLightboxActive(false);
  };

  return (
    <div>
      <div className="slideshow-container">
        <img 
          src={images[currentIdx]} 
          alt={`Carousel img ${currentIdx}`} 
          className="image-wrapper" 
          onClick={openLightbox} 
        />
        <button className="prev" onClick={handlePrev}>Prev</button>
        <button className="next" onClick={handleNext}>Next</button>
      </div>
      {lightboxActive && (
        <LightboxContent 
          content={<img src={images[currentIdx]} alt={`Lightbox img ${currentIdx}`} />} 
          onClose={closeLightbox} 
        />
      )}
    </div>
  );
};

export default ImageCarousel;
