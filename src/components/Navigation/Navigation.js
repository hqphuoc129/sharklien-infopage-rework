import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Tabs, Tab, Button } from '@mui/material';
import DehazeIcon from '@mui/icons-material/Dehaze';
import Logo from 'assets/logo.png';

const Navigation = () => {
  const [isActive, setIsActive] = useState();
  return (
    <nav className='navbar'>
      <Link
        to='/'
        id='logo'
        className={isActive === 'home' ? 'nav active' : 'nav'}
        onClick={() => {
          setIsActive('home');
        }}
      >
        <img src={Logo} alt='Logo' />
      </Link>
      <ul>
        <li>
          <Link
            to='/biography'
            className={isActive === 'biography' ? 'nav active' : 'nav'}
            onClick={() => {
              setIsActive('biography');
            }}
          >
            tiểu sử
          </Link>
        </li>
        <li>
          <Link
            to='/contribution'
            className={isActive === 'contribution' ? 'nav active' : 'nav'}
            onClick={() => {
              setIsActive('contribution');
            }}
          >
            cống hiến
          </Link>
        </li>
        <li>
          <Link
            to='/quotes'
            className={isActive === 'quotes' ? 'nav active' : 'nav'}
            onClick={() => {
              setIsActive('quotes');
            }}
          >
            Quotes
          </Link>
        </li>
        <li>
          <Link
            to='/media'
            className={isActive === 'media' ? 'nav active' : 'nav'}
            onClick={() => {
              setIsActive('media');
            }}
          >
            Media
          </Link>
        </li>
      </ul>
      <DehazeIcon className="icon-navbar"/>
    </nav>
  );
};

export default Navigation;
