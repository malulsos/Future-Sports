import React, { useState } from 'react';
import { LightboxContent } from '../../Lightbox.js';
import MyButton from '../../button.js';

const Article = ({ title, intro, content }) => {
  const [lightboxVisible, setLightboxVisible] = useState(false);

  const toggleLightbox = () => setLightboxVisible(!lightboxVisible);

  return (
    <div className="article">
      <h3>{title}</h3>
      <p>{intro}</p>
      <MyButton label="Read more" onClick={toggleLightbox} />
      {lightboxVisible && <LightboxContent content={content} onClose={toggleLightbox} />}
    </div>
  );
};

export default Article;
