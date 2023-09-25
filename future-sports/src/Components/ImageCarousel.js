// Import required libraries
import React, { useState } from 'react';
import { LightboxContent } from './Lightbox';

// Define the ImageCarousel component, which takes an 'images' array as a prop
const ImageCarousel = ({ images }) => {
  // Initialize state variables for the current image index and lightbox visibility
  const [currentIdx, setCurrentIdx] = useState(0);
  const [lightboxActive, setLightboxActive] = useState(false);

  // Handler for navigating to the previous image in the array
  const handlePrev = () => {
    setCurrentIdx((prevIdx) => (prevIdx === 0 ? images.length - 1 : prevIdx - 1));
  };

  // Handler for navigating to the next image in the array
  const handleNext = () => {
    setCurrentIdx((prevIdx) => (prevIdx === images.length - 1 ? 0 : prevIdx + 1));
  };

  // Handler for opening the lightbox
  const openLightbox = () => {
    setLightboxActive(true);
  };

  // Handler for closing the lightbox
  const closeLightbox = () => {
    setLightboxActive(false);
  };

  // Render the component JSX
  return (
    <div>
      <div className="slideshow-container">
        <img 
          src={images[currentIdx]} 
          alt={`Carousel img ${currentIdx}`} 
          className="image-wrapper" 
          onClick={openLightbox} // Open lightbox on click
        />
        <button className="prev" onClick={handlePrev}>Prev</button> {/* Previous button*/}
        <button className="next" onClick={handleNext}>Next</button> {/* Next button*/}
      </div>
      {lightboxActive && (
        // Render LightboxContent component if lightboxActive is true
        <LightboxContent 
          content={<img src={images[currentIdx]} alt={`Lightbox img ${currentIdx}`} />} 
          onClose={closeLightbox} // Close lightbox on click
        />
      )}
    </div>
  );
};

// Export the ImageCarousel component
export default ImageCarousel;
