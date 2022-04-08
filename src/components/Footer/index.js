import FooterLogo from '../../assets/logo.png'

function Footer() {
  return (
    <div className="footer">
      <div  className="footer_logo">
        <div className ='footer_logo-wrapper'> 
          <img className="footer-img" src = {FooterLogo}/> 
        </div> 
      </div>
        <div className='footer_text-wrapper'>
        <p className="footer_text">
        http://sharklien.vn/index.html
        </p>
        </div>
    </div>
  )
}

export default Footer;