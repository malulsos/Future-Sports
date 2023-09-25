// Import necessary libraries
import React from "react";
import logo from "../../images/Logo.png";

// Define the Header component
const Header = () => {
  // Render the Header component
  return (
    // Render JSX for Header
    <header className="header">
      <h1>Future Sports FC</h1>
      <img src={logo} height="100px" alt="Club Logo" />
    </header>
  );
};

// Export the Header component
export default Header;