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
        Đây là website giới thiệu về tôi - Đỗ Liên cùng hệ sinh thái kinh doanh, các hoạt động thiện nguyện và định hướng hỗ trợ cộng đồng của tôi
        </p>
        </div>
    </div>
  )
}

export default Footer;