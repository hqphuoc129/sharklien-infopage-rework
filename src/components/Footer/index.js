import FooterLogo from '../../assets/logo.png'
import { Link } from 'react-router-dom';
import {webContext} from '../../App';
import React, {useContext} from 'react'; 

function Footer() {
  const {isActive, setIsActive} = useContext(webContext)
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
        Đây là website giới thiệu về tôi - Đỗ Liên cùng hệ sinh thái kinh doanh, các hoạt động thiện nguyện và định hướng hỗ trợ cộng đồng của tôi
        </p>
        </div>
    </div>
  )
}

export default Footer;