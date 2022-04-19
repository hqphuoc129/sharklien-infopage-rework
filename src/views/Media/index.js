import React, {useState,  useContext, createContext, useEffect} from 'react';
import "antd/dist/antd.css";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";
import { Carousel } from "antd";

import News from 'components/News/News';
import Contribute_Descrpition from '../../components/Contrib Header/index';
import HeaderQuoteImg from '../Media/assets/media-07.jpg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CustomSlider from 'components/Media/CustomerSlider';
import QuoteList from 'components/QuoteList/QuoteList';
import QuoteImageOne from 'components/QuoteList/assets/quoteItem-1.png';
import QuoteImageTwo from 'components/QuoteList/assets/quoteItem-2.png';
import QuoteImageThree from 'components/QuoteList/assets/quoteItem-3.png';
import CarouselSlideContainer from 'components/CarouselSliderContainer';

//Test fetch api 
import {getData} from '../../actions/index'; 
import {useDispatch,useSelector}from 'react-redux';

import axios from 'axios'; 


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

  const dispatch = useDispatch();
  //Test fetch by redux
  useEffect( () => {
    dispatch(getData("http://js-post-api.herokuapp.com/api/posts?_limit=10&_page=1")); 
     
        }
  ,[])

  
  const data = useSelector(state => state.fetch);
  //{console.log(data)} 

  return (
    <>
      <div>
        <Contribute_Descrpition img={HeaderQuoteImg} title={'MEDIA'} lightText={true} /> 
        <CustomSlider/>
        <div className="media-news-title news-spacecing">Sự kiện báo chí</div>
        <News/>
        <CarouselSlideContainer vidlist={vid} linkClass={"carousel-media"} title={<div className='media-news-title'>"Video đầu tư của Shark Liên trên chương trình Shark Tank"</div>} totalNum={3}/>
      </div>

    </>
  );
};

export default Media;
