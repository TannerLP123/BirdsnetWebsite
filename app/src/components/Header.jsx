import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import '../css/Header.css';

const Header = () => {
  return (
    <div className='Header'>
      <nav>
        <ul>
        <li className = ''>
            <Link to = '/'>Home</Link>
          </li>
          <li className = ''>
            <Link to = '/food'>Food</Link>
          </li>
          <li className = ''>
            <Link to = '/beer'>Beer</Link>
          </li>
          <li className=''>
            <Link to = '/ctails'>Cocktails</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  )
}

export default Header;