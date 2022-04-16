import CauouselSliderContainer from 'components/CarouselSliderContainer'; 

import ngoaigiao1 from './assets/ngoaigiao1.jpg';
import ngoaigiao2 from './assets/ngoaigiao2.jpg';
import ngoaigiao3 from './assets/ngoaigiao3.jpg';


const vid_ngoaigiao = [
  {
      image : ngoaigiao1,
      id : "t_abyjfGBTQ",
  
  }, 
  {
      image : ngoaigiao2,
      id : "QcNjv8etaws",
  },
  {
      image : ngoaigiao3,
      id : "0lvPJKkbgaI",

  },]
const Foreign = () => {
  return (
    <>
    <div className='foreign-content insurance-content-mobile'>
      <p>
        Trên cương vị là Lãnh sự Danh dự Cộng hòa Nam Phi tại TP.HCM, bằng sự nỗ lực không ngừng nghỉ, tôi đã có hơn 10
        năm hoạt động ngoại giao rất thành công và tạo được những dấu ấn đậm nét trong việc thúc đẩy quan hệ hữu nghị
        giữa hai nước Việt Nam và Nam Phi.
      </p>
      <p>
        Văn phòng Lãnh sự (VPLS) Nam Phi tại TP.HCM hoạt động từ năm 2009 đến nay, do bà Đỗ Thị Kim Liên thành lập đã tư
        vấn, hỗ trợ hàng trăm ngàn lượt công dân Việt Nam xin visa đi Nam Phi; công dân Nam Phi đang sinh sống tại Việt
        Nam thực hiện các thủ tục hành chính, cùng các hoạt động kết nối khác để làm quen, hòa nhập với cuộc sống tại
        Việt Nam nhanh chóng và hiệu quả nhất.
      </p>
      <p>
        Bên cạnh đó, VPLS Nam Phi tại TP.HCM đã tổ chức hàng trăm Hội thảo xúc tiến Kinh tế, thương mại và du lịch; đón
        tiếp hàng chục phái đoàn, doanh nghiệp Nam Phi đến thăm, tìm hiểu thị trường Việt Nam và hỗ trợ các doanh nghiệp
        Việt Nam tìm hiểu thị trường Nam Phi. Những hoạt động đó đã góp phần đưa tổng kim ngạch thương mại song phương
        Việt Nam – Nam Phi tăng hơn 5 lần, từ 189 triệu USD cuối năm 2007 lên 1,1 tỷ USD cuối 2018, hướng tới mục tiêu 2
        tỷ USD trong 5 năm tới.
      </p>
      <p>
        Năm 2018, Chính phủ Nam Phi đã gửi Thư khen vì những đóng góp tích cực của tôi và cộng sự trong việc quảng bá,
        xây dựng hình ảnh Nam Phi tại Việt Nam.
      </p>
      <p>
        Tìm hiểu thêm các hoạt động ngoại giao của tôi: <a className="link-click" href="https://southafricahc.com" >southafricahc.com</a>
      </p>
    </div>
    <CauouselSliderContainer vidlist= {vid_ngoaigiao} linkClass={"carousel-media"} title={"Các video liên quan"} totalNum ={3}/>
    </>
  );
};
export default Foreign;
