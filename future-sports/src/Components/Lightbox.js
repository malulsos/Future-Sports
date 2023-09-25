// Import React library
import React from 'react';

// Define LightboxContent component to accept content and onClose props
const LightboxContent = ({ content, onClose }) => {
    // Render JSX for the Lightbox
    return (
        <div className="lightbox-overlay"> {/* Overlay to darken the background */}
            <div className="lightbox"> {/* Lightbox container */}
                <span className="lightbox-close" onClick={onClose}>&times;</span> {/* Click handler for the close button */}
                <div className="lightbox-content"> {/* Container for the actual content */}
                    {content}
                </div>
            </div>
        </div>
    );
};

// Export LightboxContent component
export { LightboxContent };
