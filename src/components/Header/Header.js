import React from 'react';
import './Header.css';
import logo from '../../images/logo-rut-white.png';

function Header() {
  return (
    <div className="header container">
      <img className="header__logo" alt="логотип" src={logo}></img>
    </div>
  );
}

export default Header;
