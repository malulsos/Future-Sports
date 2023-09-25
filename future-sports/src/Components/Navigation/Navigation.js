import React from "react";
import Search from '..//Navigation/Search'; 

const Navigation = () => {
  const navItems = ["Home", "News", "Photos", "Videos", "Calendar", "Weather", "Roster", "Contact Us"];

  const navButtons = navItems.map((nav, index) => (
    <a href={nav === 'Home' ? '#' : `#${nav.toLowerCase().replace(" ", "_")}`} key={index} className="button">
      {nav}
    </a>
  ));

  return (
    <nav className="nav">
      {navButtons}
      <Search items={navItems} /> {/* Use the Search component */}
    </nav>
  );
};

export default Navigation;
