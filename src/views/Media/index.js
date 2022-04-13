import React from 'react';
import Contribute_Descrpition from '../../components/Contrib Header/index';
import HeaderQuoteImg from '../Media/assets/media-07.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CustomSlider from 'components/Media/CustomerSlider';
import QuoteList from 'components/QuoteList/QuoteList';
import QuoteImageOne from 'components/QuoteList/assets/quoteItem-1.png';
import QuoteImageTwo from 'components/QuoteList/assets/quoteItem-2.png';
import QuoteImageThree from 'components/QuoteList/assets/quoteItem-3.png';
const Media = () => {
  const QUOTE_DATA = [
    { image: QuoteImageOne, subtitle: "Shark Liên: 'Kinh doanh mà chỉ làm ra tiền thôi thì chưa phải là kinh doanh'", news:"https://tuoitre.vn/shark-lien-kinh-doanh-ma-chi-lam-ra-tien-thoi-thi-chua-phai-la-kinh-doanh-20210717144207854.htm"},
    { image: QuoteImageTwo, subtitle: "Sợi dây nối dài dòng chảy nghĩa tình của Shark Liên", news:"https://thanhnien.vn/soi-day-noi-dai-dong-chay-nghia-tinh-cua-shark-lien-post1416669.html"},
    { image: QuoteImageThree, subtitle: "Shark Đỗ Liên thực hiện chương trình ‘Gói tình Shark Liên - gửi nghĩa Sài Gòn’", news:"https://thanhnien.vn/shark-do-lien-thuc-hien-chuong-trinh-goi-tinh-shark-lien-gui-nghia-sai-gon-post1091508.html"},
  ];
  return (
    <>
      <div>
        <Contribute_Descrpition img={HeaderQuoteImg} title={'MEDIA'} lightText={true} /> 
        <CustomSlider/>
        <div className={`media-box-data`}>
          <QuoteList data={QUOTE_DATA} />
        </div>
      </div>
    </>
  );
};

export default Media;
