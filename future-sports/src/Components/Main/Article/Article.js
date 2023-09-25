// Import necessary libraries
import React, { useState } from 'react';
import { LightboxContent } from '../../Lightbox.js';
import MyButton from '../../button.js';

// Define the Article component to accept title, intro, and content props
const Article = ({ title, intro, content }) => {
  // Define lightboxVisible state variable and setLightboxVisible state setter function
  const [lightboxVisible, setLightboxVisible] = useState(false);
  
  // Define toggleLightbox function to toggle the lightboxVisible state variable
  const toggleLightbox = () => setLightboxVisible(!lightboxVisible);

  // Render the Article component
  return (
    // Render JSX for Article
    <div className="article">
      <h3>{title}</h3>
      <p>{intro}</p>
      <MyButton label="Read more" onClick={toggleLightbox} />
      {lightboxVisible && <LightboxContent content={content} onClose={toggleLightbox} />}
    </div>
  );
};

// Export the Article component
export default Article;
