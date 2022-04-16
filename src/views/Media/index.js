import React, {useState,  useContext, createContext} from 'react';
import "antd/dist/antd.css";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";
import { Carousel } from "antd";

import News from 'components/News/News';
import Contribute_Descrpition from '../../components/Contrib Header/index';
import HeaderQuoteImg from '../Media/assets/media-07.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CustomSlider from 'components/Media/CustomerSlider';
import CarouselSliderMedia from 'components/CarouselSliderMedia';


export const AppContext = createContext(null); 
const Media = () => {
  const  [state, setState] = useState({
      _id: "",
      isnotpause: true,
      isOpen: false,
  })
  return (
    <>
      <div>
        <Contribute_Descrpition img={HeaderQuoteImg} title={'MEDIA'} lightText={true} /> 
        <CustomSlider/>
        <div className="index-combine-title spacecing">Sự kiện báo chí</div>
        <News/>
        <div className="index-combine-title spacecing">Video đầu tư của shark Liên trên chương trình Shark Tank</div>
        <AppContext.Provider value={{state, setState}}>
          <CarouselSliderMedia pause={state.isnotpause}/>
          <ModalVideo
                          channel= "youtube"
                          isOpen = {state.isOpen}
                          videoId ={state._id}
                          allowFullScreen
                          onClose = {() => (setState({isOpen : false, isnotpause : true}))}
                          /> 
          </AppContext.Provider>
      </div>

    </>
  );
};

export default Media;
