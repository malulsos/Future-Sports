// Import necessary libraries
import React from 'react';
import ImageCarousel from '../ImageCarousel.js';
import image1 from '../../images/1.jpg';
import image2 from '../../images/2.jpg';
import image3 from '../../images/3.jpg';
import image4 from '../../images/4.jpg';
import image5 from '../../images/5.jpg';
import image6 from '../../images/6.png';

// Define the Photos component
const Photos = () => {
  // Define the images array
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6
  ];

  // Render the Photos component
  return (
    // Render JSX for Photos
    <section className="photos">
      <a id="photos"></a> {/* Photos Navigation link */}
      <h2>Photo Section</h2>
      <div className="image-wrapper"> 
      <ImageCarousel images={images} /> {/* Add the ImageCarousel component */}
      </div>
    </section>
  );
};

// Export the Photos component
export default Photos;
