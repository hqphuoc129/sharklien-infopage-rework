import CauouselSliderContainer from 'components/CarouselSliderContainer'; 

import nuocsach1 from './assets/nuocsach1.jpg';
import nuocsach2 from './assets/nuocsach2.jpg';
import nuocsach3 from './assets/nuocsach3.jpg';
import nuocsach4 from './assets/nuocsach4.jpg';

const vid_nuocsach = [
  {
      image : nuocsach1,
      id : "DXazqJr-ppg",
  
  }, 
  {
      image : nuocsach2,
      id : "wbn-fNpMhGs",
  },
  {
      image : nuocsach3,
      id : "Nh3w7N2g8ps",

  },
  {
      image : nuocsach4,
      id : "ObtPg8S3T-k",

  },]
const Water = () => {
  return (
    <>
    <div className='water-content insurance-content-mobile'>
      <p>
        “Ở đâu có nước, ở đó có sự sống”. Với ý nghĩa đó, tôi đã thành lập Tập đoàn AquaOne - chuyên cung cấp và xử lý
        nước sạch phục vụ cho hoạt động sinh hoạt của người dân. Với các công trình nước sạch dân sinh, AquaOne đảm bảo
        cân đối các ưu tiên theo thứ tự: Chất lượng nước tuyệt đối an toàn, vệ sinh, sạch và không có nguy cơ gây bệnh
        trước mắt cũng như lâu dài.
      </p>
      <p>
        Về mặt xã hội: AquaOne góp phần nâng cao sức khỏe người dân, đặc biệt là trẻ em, người già và phụ nữ. Dùng nước
        sạch giúp giảm bệnh tật gây ra từ nguồn nước không hợp vệ sinh. Các Nhà máy của AquaOne cũng tạo thêm công ăn
        việc làm cho người dân.
      </p>
      <p>
        Về kinh tế: những dịch vụ của nước không thể lượng giá được nhưng lại có giá trị kinh tế lớn. AquaOne góp phần
        đa dạng hóa các thành phần kinh tế trong sản xuất và kinh doanh nước sạch, thúc đẩy quá trình đô thị hóa tại các
        địa phương, đồng thời thu hút các nhà đầu tư.
      </p>
      <p>
        Hiện tại, Tập đoàn AquaOne là Chủ đầu tư của các dự án lớn: Nhà máy nước mặt Sông Hậu (Tỉnh Hậu Giang), Nhà máy
        nước mặt Sông Đuống (TP.Hà Nội), Nhà máy nước mặt Xuân Mai – Hòa Bình (Hòa Bình), Nhà máy nước mặt Sông Vàm Cỏ
        Đông (Long An).
      </p>
      <p>
        Với nguồn nước khan hiếm hiện nay, tôi mong người dân hãy sử dụng nước một cách phù hợp, tránh lãng phí và có ý
        thức hơn trong việc bảo vệ môi trường, tránh làm ô nhiễm nguồn nước.
      </p>
      <p>
        Tham quan dự án nước sạch của tôi: <a className="link-click" href="https://aquaone.vn" >aquaone.vn</a>
      </p>
    </div>
    <CauouselSliderContainer vidlist= {vid_nuocsach} linkClass={"carousel-media"} title={"Các video liên quan"} totalNum ={3}/>
    </> 
  );
};

export default Water;
