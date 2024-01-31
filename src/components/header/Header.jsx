import React from "react";
import "./Header.css";
import Logo from "../../images/logo.png";

const Header = () => {
  return (
    <header className="header">
      <img className="header__logo" src={Logo} alt="howl-logo" />
      <div className="menu">
        <div className="menu__bar"></div>
        <div className="menu__bar"></div>
      </div>
    </header>
  );
};

export default Header;
