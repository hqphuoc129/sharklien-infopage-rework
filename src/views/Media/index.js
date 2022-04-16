import React, {useState,  useContext, createContext} from 'react';
import "antd/dist/antd.css";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";
import { Carousel } from "antd";


import Contribute_Descrpition from '../../components/Contrib Header/index';
import HeaderQuoteImg from '../Media/assets/media-07.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CustomSlider from 'components/Media/CustomerSlider';
import QuoteList from 'components/QuoteList/QuoteList';
import QuoteImageOne from 'components/QuoteList/assets/quoteItem-1.png';
import QuoteImageTwo from 'components/QuoteList/assets/quoteItem-2.png';
import QuoteImageThree from 'components/QuoteList/assets/quoteItem-3.png';
import CarouselSlideContainer from 'components/CarouselSliderContainer';


import thumbnails1 from '../../components/CarouselSliderVideo/thumbnails/sharktank1.jpg';
import thumbnails2 from '../../components/CarouselSliderVideo/thumbnails/sharktank2.jpg';
import thumbnails3 from '../../components/CarouselSliderVideo/thumbnails/sharktank3.jpg';
import thumbnails4 from '../../components/CarouselSliderVideo/thumbnails/sharktank4.jpg';
import thumbnails5 from '../../components/CarouselSliderVideo/thumbnails/sharktank5.jpg';
import thumbnails6 from '../../components/CarouselSliderVideo/thumbnails/sharktank6.jpg';
import thumbnails7 from '../../components/CarouselSliderVideo/thumbnails/sharktank7.jpg';
import thumbnails8 from '../../components/CarouselSliderVideo/thumbnails/sharktank8.jpg';
import thumbnails9 from '../../components/CarouselSliderVideo/thumbnails/sharktank9.jpg';
import thumbnails10 from '../../components/CarouselSliderVideo/thumbnails/sharktank10.jpg';
import thumbnails11 from '../../components/CarouselSliderVideo/thumbnails/sharktank11.jpg';
import thumbnails12 from '../../components/CarouselSliderVideo/thumbnails/sharktank12.jpg';
import thumbnails13 from '../../components/CarouselSliderVideo/thumbnails/sharktank13.jpg';


const vid = [
  {
      image : thumbnails1,
      id : "snx67d4J42Q",
  
  }, 
  {
      image : thumbnails2,
      id : "iW8aGs5uOtw",
  }, 
  {
      image : thumbnails3,
      id : "ZcSuKkmxX0g",
  }, 
  {
      image : thumbnails4,
      id : "lgV-ies0FUc",
  }, 
  {
      image : thumbnails5,
      id : "rkrccP6_cP8",
  }, 
  {
      image : thumbnails6,
      id : "BaZxR_EUIOM",
  },
  {
      image : thumbnails7,
      id: "T1rFEsFlveI"
  },
  {
      image : thumbnails8,
      id: "t9nKmoTdfbw"
  },
  {
      image : thumbnails9,
      id: "ztHr2JzSoPc"
  },
  {
      image : thumbnails10,
      id: "jK_CMJSKo8E"
  },
  {
      image : thumbnails11,
      id: "VWW0OkxXjz4"
  },
  {
      image : thumbnails12,
      id: "JdY9MQXGMtk"   
  },
  {
      image : thumbnails13,   
      id: "hvyPOrylF5E"
  },
]




export const AppContext = createContext(null); 
const Media = () => {
  const  [state, setState] = useState({
      _id: "",
      isnotpause: true,
      isOpen: false,
  })
  const QUOTE_DATA = [
    { image: QuoteImageOne, hoverImage:true, subtitle: "Shark Liên: 'Kinh doanh mà chỉ làm ra tiền thôi thì chưa phải là kinh doanh'", news:"https://tuoitre.vn/shark-lien-kinh-doanh-ma-chi-lam-ra-tien-thoi-thi-chua-phai-la-kinh-doanh-20210717144207854.htm"},
    { image: QuoteImageTwo, hoverImage:true, subtitle: "Sợi dây nối dài dòng chảy nghĩa tình của Shark Liên", news:"https://thanhnien.vn/soi-day-noi-dai-dong-chay-nghia-tinh-cua-shark-lien-post1416669.html"},
    { image: QuoteImageThree, hoverImage:true, subtitle: "Shark Đỗ Liên thực hiện chương trình ‘Gói tình Shark Liên - gửi nghĩa Sài Gòn’", news:"https://thanhnien.vn/shark-do-lien-thuc-hien-chuong-trinh-goi-tinh-shark-lien-gui-nghia-sai-gon-post1091508.html"},
  ];
  return (
    <>
      <div>
        <Contribute_Descrpition img={HeaderQuoteImg} title={'MEDIA'} lightText={true} /> 
        <CustomSlider/>
        <div className={`media-box-data`}>
          <QuoteList data={QUOTE_DATA} />
        </div>
        <CarouselSlideContainer vidlist={vid} linkClass={"carousel-media"} title={"Video đầu tư của Shark Liên trên chương trình Shark Tank"} totalNum={3}/>
      </div>

    </>
  );
};

export default Media;
