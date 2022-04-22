import React, { useState,useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Tabs, Tab, Button } from '@mui/material';
import DehazeIcon from '@mui/icons-material/Dehaze';
import Logo from 'assets/logo.png';
import SelectLang from 'components/Language/selectLang';
import {webContext} from '../../App';
import {FormattedMessage, FormattedDate} from 'react-intl';
import VietNam from '../../lang/vn.json';

const Navigation = () => {
  const {isActive, setIsActive} = useContext(webContext)
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
        <FormattedMessage id="navbar.title-tieusu" defaultMessage={VietNam['navbar']['title-tieusu']}/>
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
        <FormattedMessage id="navbar.title-conghien" defaultMessage={VietNam['navbar']['title-conghien']}/>
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
          <FormattedMessage id="navbar.title-quotes" defaultMessage={VietNam['navbar']['title-quotes']}/>
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
          <FormattedMessage id="navbar.title-media" defaultMessage={VietNam['navbar']['title-media']}/>
          </Link>
        </li>
        <li>
          <SelectLang/>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
