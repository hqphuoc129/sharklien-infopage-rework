import React, { Component } from "react";
import Slider from "react-slick";



const CustomSlider = (props) => {
    const settings = {
        customPaging: function(i) {
          return (
            <div >
            <a >
              <img  style={{width: "12rem",height:"8rem", objectFit: "cover"}} src={require(`../../views/Media/assets/${i + 1}.png`)} />
            </a>
            </div>
          );
        },
        dots: true,
        dotsClass: "slick-dots-style" ,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

      return (
        <div style={{marginTop: "5rem", marginRight: "1.5vw"}}>
        <Slider {...settings}>
        <div>
            <img style={{margin: "auto", width: "auto", height: "40.833333333333332vw"}} src={require("../../views/Media/assets/1.png")} />
          </div>
          <div>
            <img style={{margin: "auto", width: "auto", height: "40.833333333333332vw"}} src={require("../../views/Media/assets/2.png")} />
          </div>
          <div>
             <img style={{margin: "auto", width: "auto", height: "40.833333333333332vw"}} src={require("../../views/Media/assets/3.png")} />
          </div>
          <div>
            <img style={{margin: "auto", width: "auto", height: "40.833333333333332vw"}} src={require("../../views/Media/assets/4.png")} />
          </div>
          <div>
            <img style={{margin: "auto", width: "auto", height: "40.833333333333332vw"}} src={require("../../views/Media/assets/5.png")} />
          </div>
          <div>
            <img style={{margin: "auto", width: "auto", height: "40.833333333333332vw"}} src={require("../../views/Media/assets/6.png")} />
          </div>

        </Slider>
      </div>
      )

}
export default CustomSlider;