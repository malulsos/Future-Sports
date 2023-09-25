import React from "react";
import logo from "../../images/Logo.png";

const Header = () => {
  return (
    <header className="header">
      <h1>Future Sports FC</h1>
      <img src={logo} height="100px" alt="Club Logo" />
    </header>
  );
};

export default Header;