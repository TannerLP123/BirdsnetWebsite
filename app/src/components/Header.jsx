import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import '../css/Header.css';

const Header = () => {
  return (
    <div>
      <nav className = 'Header'>
        <ul>
        <li id = 'homeBtn'>
            <NavLink to = '/'>Home</NavLink>       
        </li>
        <li id = 'foodBtn'>
            <NavLink to = '/food'>Food</NavLink>
          </li>
          <li id = 'beerBtn'>
            <NavLink to = '/beer'>Beer</NavLink>
          </li>
          <li id = 'ctailsBtn'>
            <NavLink to = '/ctails'>Cocktails</NavLink>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  )
}

export default Header;