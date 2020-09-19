import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
        <Link className='navbar-brand' to='/'>Avatar World</Link>
        <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon' />
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item'>
              <Link className='nav-link' to='/characters'>Characters</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/places'>Places</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/others'>Others</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
