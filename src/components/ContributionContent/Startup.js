import CauouselSliderContainer from 'components/CarouselSliderContainer'; 

import startup1 from './assets/startup1.jpg';
import startup2 from './assets/startup2.jpg';
import nothumbnails from './assets/nothumbnails.png';

const vid_startup = [
  {
      image : startup1,
      id : "ibFhn_tHhWw",
  
  }, 
  {
      image : startup2,
      id : "PuU8OeyclwE",
  },
  {
      image : nothumbnails,
      id : "eR4UifvkQUw",

  },
  {
    image : nothumbnails,
    id : "vHAqAPWevTA",

  },]

const Startup = () => {
  return (
    <>
    <div className='startup-content insurance-content-mobile'>
      <p>
        Một thế hệ trẻ vận động không ngừng với những dự án nhân văn và vì cộng đồng sẽ nhận được cái gật đầu từ tôi.
      </p>
      <p>
        Sự hỗ trợ của tôi dành cho các start-up không chỉ giới hạn ở việc đầu tư tài chính. Tôi mong muốn trở thành điểm
        tựa vững chắc cho những nhà khởi nghiệp với hoài bão và sự cống hiến cho xã hội, giúp các bạn trở thành người
        dẫn đầu kỷ nguyên hiện tại. Và hướng tới xây dựng Việt Nam là một quốc gia khởi nghiệp năng động, tự tin trong
        khu vực và trên thế giới.
      </p>
      <p>
        Những công ty đang nhận được sự hỗ trợ từ tôi để nâng cao năng lực cạnh tranh trên thị trường: Công ty Cổ phần
        Đầu tư và Phát triển Edu ProMax, Công ty Cổ phần Thương mại - Dịch vụ và Sản xuất ECO LIFE, Công ty TNHH Sen
        Vàng; Dự án Lô Tô, Shecodes, Vua Cua…
      </p>
      <p>
        Xem thêm cách tôi đã hỗ trợ start up tại: <a className="link-click" href="https://svv.vn" >svv.vn</a>
      </p>
    </div>
    <CauouselSliderContainer vidlist= {vid_startup} linkClass={"carousel-media"} title={"Các video liên quan"} totalNum ={3}/>
    </>
  );
};

export default Startup;
