// Import necessary libraries
import React from "react";
import Search from '..//Navigation/Search'; 

// Define the Navigation component
const Navigation = () => {
  // Initialize array of navigation items
  const navItems = ["Home", "News", "Photos", "Videos", "Calendar", "Weather", "Roster", "Contact Us"];

  // Map over navItems to create an array of anchor tags
  const navButtons = navItems.map((nav, index) => (
    // Conditionally set href attribute based on the nav item name 
    <a href={nav === 'Home' ? '#' : `#${nav.toLowerCase().replace(" ", "_")}`} key={index} className="button">
      {nav} {/* Display the navigation item name */}
    </a>
  ));

  // Render the navigation bar and embedded Search component
  return (
    // Render JSX for Navigation
    <nav className="nav">
      {navButtons} {/* Insert the array of anchor tags */}
      <Search items={navItems} /> {/* Include Search component and pass navItems as props */}
    </nav>
  );
};

// Export the Navigation component
export default Navigation;
