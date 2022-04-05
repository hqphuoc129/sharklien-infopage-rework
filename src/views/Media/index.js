import React from 'react';
import Header from 'components/Header/Header';
import HeaderQuoteImg from '../Media/assets/media-07.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CustomSlider from 'components/Media/CustomerSlider';
const Media = () => {

  return (
    <>
    <div>
      <Header img={HeaderQuoteImg} title={'MEDIA'} />{' '}
      <CustomSlider/>
      </div>
    </>
  );
};

export default Media;
