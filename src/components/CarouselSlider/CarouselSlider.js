import "antd/dist/antd.css";
import { Carousel } from "antd";
import CarouselSliderImg1 from "components/CarouselSlider/assets/CarouselSliderImg1.jpg";
import CarouselSliderImg2 from "components/CarouselSlider/assets/CarouselSliderImg2.jpg";

import CarouselSliderImg1en from "components/CarouselSlider/assets/CarouselSliderImg1-en.jpg";
import CarouselSliderImg2en from "components/CarouselSlider/assets/CarouselSliderImg-2en.jpg";

import CarouselSliderMobile from "components/CarouselSlider/assets/carousel-mobile.jpg"
import CarouselSliderMobileen from "components/CarouselSlider/assets/carousel-mobile-en.jpg"
import CarouselBackgroundImg from "components/CarouselSlider/assets/carousel-mobile.jpg";
import React, {useEffect,useState,useContext} from 'react';
import {Context} from 'components/Language';
const CarouselSlider = () => {
  
  const context = useContext(Context);
  let LIST_IMG = [CarouselSliderImg1,CarouselSliderImg2];
  let LIST_IMG_MOBILE = CarouselSliderMobile
  if (context.locale === "vn"){
    LIST_IMG = [CarouselSliderImg1,CarouselSliderImg2];
    LIST_IMG_MOBILE = CarouselSliderMobile
  }
  else if(context.locale === "en"){
    LIST_IMG = [CarouselSliderImg1en,CarouselSliderImg2en];
    LIST_IMG_MOBILE = CarouselSliderMobileen
  }
  return (
    <div className="carousel-mobile">
      <img src={LIST_IMG_MOBILE} className="carousel-mobile-img"/>
      <Carousel autoplay className="carousel-home">
        {LIST_IMG.map((item, idx) => (
          <div className="carousel-background">
            <img src={item} key={idx}/>
          </div>
        ))}
      </Carousel>
    </div>

  );
};
export default CarouselSlider;
