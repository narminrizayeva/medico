import React, { useState } from 'react';
import medico from "../assets/medico.logo.webp";
import "./Navbar.css";

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="navbar">
      <div className='navbar-container'>
        <img src={medico} alt="" />
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Doctors</a>
        <div className="dropdown" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
          <a href="">Pages</a>
          <div className={`dropdown-content ${isDropdownOpen ? "show" : ""}`}>
            <a href="#">Page 1</a>
            <a href="#">Page 2</a>
            <a href="#">Page 3</a>
          </div>
        </div>
        <a href="">Contact</a>
        <button className='navbar-button'>HOT LINE-09856</button>
      </div>
      
      <div className='button'></div>
    </nav>
  );
}
export default Navbar
