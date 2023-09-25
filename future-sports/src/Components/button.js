// Import React library
import React from 'react';

// Define MyButton component to accept label and onClick props
function MyButton({ label, onClick }) {
  // Render JSX for MyButton
  return (
  <button 
    className="my-button"
    onClick={onClick}> {/* onClick event handler */}
      {label} {/* Add label prop */}
    </button> 
  );
}

// Export MyButton component
export default MyButton;
