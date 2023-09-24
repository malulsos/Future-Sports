import React, { useState } from 'react';
import { LightboxContent } from '../Lightbox'; 

const Roster = () => {
    const [lightboxVisible, setLightboxVisible] = useState(false);

    const handleImageClick = () => {
        setLightboxVisible(true);
    };

    const handleLightboxClose = () => {
        setLightboxVisible(false);
    };

    const lightboxContent = <img src={require('../../images/team.jpg')} alt="Team" />;

    return (
        <section className="roster">
            <a id="roster"></a>
            <h2>Roster</h2>
            <img
                src={require('../../images/team.jpg')}
                alt="Team"
                onClick={handleImageClick}
            />
            {lightboxVisible && (
                <LightboxContent content={lightboxContent} onClose={handleLightboxClose} />
            )}
        </section>
    );
};

export default Roster;
