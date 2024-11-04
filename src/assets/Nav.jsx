import React from 'react';
import './Components/Nav.css';
import navLogo from './navLogo.png';

const Nav = () => {
  return (
    <div className='nav-bar'>
      <div className="nav-logo">
         <img src={navLogo} alt="" />
      </div>
      <ul className='nav-menu'>
        <li>Home</li>
        <li>About</li>
        <li>Shop</li>
        <li className='nav-contact'>Contact</li>
      </ul>
     
    </div>
  )
}

export default Nav
