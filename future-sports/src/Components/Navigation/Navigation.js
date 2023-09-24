import React from "react";

const Navigation = () => {
  const navItems = ["Home", "News", "Photos", "Videos", "Calendar", "Weather", "Roster", "Contact Us"];

  const navButtons = navItems.map((nav, index) => (
    <a href={`#${nav.toLowerCase().replace(" ", "_")}`} key={index} className="button">
      {nav}
    </a>
  ));

  return (
    <nav className="nav">
      {navButtons}
      <div className="searchbar">
        <form method="get">
          <label htmlFor="searchInput">Search:</label>
          <input type="text" id="searchInput" placeholder="Enter your search" />
          <button id="searchButton">Search</button>
        </form>
      </div>
    </nav>
  );
};



export default Navigation;
