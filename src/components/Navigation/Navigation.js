import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Tabs, Tab, Button } from '@mui/material';
import DehazeIcon from '@mui/icons-material/Dehaze';
import Logo from 'assets/logo.png';

const Navigation = () => {
  const [isActive, setIsActive] = useState();
  const [showul, setShowul] = useState(false);
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
      <DehazeIcon className="icon-navbar" onClick={() =>{ setShowul(!showul)}}/>
      <ul id={showul ? "hidden": ""}>
        <li>
          <Link
            to='/biography'
            className={isActive === 'biography' ? 'nav active' : 'nav'}
            onClick={() => {
              setIsActive('biography');
              setShowul(!showul)
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
              setShowul(!showul)
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
              setShowul(!showul)
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
              setShowul(!showul)
            }}
          >
            Media
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
