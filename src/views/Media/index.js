import React from 'react';
import Header from 'components/Header/Header';
import HeaderQuoteImg from '../Media/assets/media-07.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
const Media = () => {
  const settings = {
    customPaging: function (i) {
      return (
        <a>
          <img src={require('../Media/assets/0.png')} />{' '}
        </a>
      );
    },
    dots: true,
    dotsClass: 'slick-dots slick-thumb',
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <Header img={HeaderQuoteImg} title={'MEDIA'} />{' '}
      <div>
        <Slider {...settings}>
          <div>
            <img src={require('../Media/assets/0.png')} />{' '}
          </div>{' '}
          <div>
            <img src={require('../Media/assets/1.png')} />{' '}
          </div>{' '}
          <div>
            <img src={require('../Media/assets/2.png')} />{' '}
          </div>{' '}
          <div>
            <img src={require('../Media/assets/3.png')} />{' '}
          </div>{' '}
          <div>
            <img src={require('../Media/assets/4.png')} />{' '}
          </div>{' '}
          <div>
            <img src={require('../Media/assets/5.png')} />{' '}
          </div>{' '}
        </Slider>{' '}
      </div>{' '}
    </>
  );
};

export default Media;
