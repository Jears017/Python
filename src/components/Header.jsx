import React from 'react';
import '../App.css';
import img from './python-logo.png'


const Header = () => {
  return (
    <div className="header">
      <img className="logo" src={img} alt="" />
      <nav className="nav_bar">
        <a className="link" href="#">Home</a>
        <a className="link" href="#">About</a>
        <a className="link" href="#">Lectures</a>
        <a className="link" href="#">Tasks</a>
      </nav>
    </div>
  );
}

export default Header;
