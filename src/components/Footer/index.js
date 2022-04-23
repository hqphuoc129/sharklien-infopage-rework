import FooterLogo from '../../assets/logo.png'
import { Link } from 'react-router-dom';
import {webContext} from '../../App';
import React, {useContext} from 'react'; 
import {FaTiktok,FaYoutube,FaFacebook} from 'react-icons/fa';


import VietNam from '../../lang/vn.json';
import {FormattedMessage, FormattedDate} from 'react-intl';

function Footer() {
  const {isActive, setIsActive} = useContext(webContext); 
  return (
    <div className="footer">
      <Link
        to='/'
        className={`footer_logo ` + isActive === 'home' ? 'nav active' : ''}
        onClick={() => {
          setIsActive('home');
          window.scrollTo(0,0);
        }}
      >
        <div className ='footer_logo-wrapper'> 
          <img className="footer-img" src = {FooterLogo}/> 
        </div> 
      </Link>
        <div className='footer_text-wrapper'>
          <p className="footer_text">
          <FormattedMessage id="footer.sentences" defaultMessage={VietNam['footer']['sentences']}/>
          </p>
          <div className="contact-container">
            <p style={{margin: "0px"}}><FormattedMessage id="footer.contact" defaultMessage={VietNam['footer']['contact']}/><span style={{fontWeight:"bold"}}>0832596395</span></p>
            <div className="contact-icon-container">
              <a href="https://www.tiktok.com/@sharkdolien" className='contact-icon'><FaTiktok/></a>
              <a href="https://www.youtube.com/channel/UCTyHeMwx1x5u5EirSvqLtcw" className='contact-icon'><FaYoutube/></a>
              <a href="https://www.facebook.com/groups/SharkLien" className='contact-icon'><FaFacebook/></a>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Footer;