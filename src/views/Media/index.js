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
import CarouselSliderMedia from 'components/CarouselSliderMedia';


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
        <AppContext.Provider value={{state, setState}}>
          <CarouselSliderMedia pause={state.isnotpause}/>
          <ModalVideo
                          channel= "youtube"
                          isOpen = {state.isOpen}
                          videoId ={state._id}
                          allowFullScreen
                          onClose = {() => (setState({isOpen : false, isnotpause : true}))}
                          /> 
          {console.log(state.isnotpause)}
          </AppContext.Provider>
      </div>

    </>
  );
};

export default Media;
