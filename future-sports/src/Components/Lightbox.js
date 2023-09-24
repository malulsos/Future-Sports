import React from 'react';

const LightboxContent = ({ content, onClose }) => {
    return (
        <div className="lightbox-overlay">
            <div className="lightbox">
                <span className="lightbox-close" onClick={onClose}>&times;</span>
                <div className="lightbox-content">
                    {content}
                </div>
            </div>
        </div>
    );
};

export { LightboxContent };
