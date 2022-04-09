import React, { Component } from "react";
import Slider from "react-slick";



const CustomSlider = (props) => {
    const settings = {
        customPaging: function(i) {
          return (
            <div >
            <a >
              <img  className="media-center-image" src={require(`../../views/Media/assets/${i + 1}.png`)} />
            </a>
            </div>
          );
        },
        dots: true,
        dotsClass: "slick-dots-style slick-thumb" ,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

      return (
        <div className="media-slider-container">
        <Slider {...settings}>
        <div>
            <img className="media-slider-image" src={require("../../views/Media/assets/1.png")} />
          </div>
          <div>
            <img className="media-slider-image" src={require("../../views/Media/assets/2.png")} />
          </div>
          <div>
             <img className="media-slider-image" src={require("../../views/Media/assets/3.png")} />
          </div>
          <div>
            <img className="media-slider-image" src={require("../../views/Media/assets/4.png")} />
          </div>
          <div>
            <img className="media-slider-image" src={require("../../views/Media/assets/5.png")} />
          </div>
          <div>
            <img className="media-slider-image" src={require("../../views/Media/assets/6.png")} />
          </div>

        </Slider>
      </div>
      )

}
export default CustomSlider;