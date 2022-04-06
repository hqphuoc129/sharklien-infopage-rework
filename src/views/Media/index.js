import React from 'react';
import Contribute_Descrpition from '../../components/Contrib Header/index';
import HeaderQuoteImg from '../Media/assets/media-07.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CustomSlider from 'components/Media/CustomerSlider';
const Media = () => {

  return (
    <>
    <div>
      <Contribute_Descrpition img={HeaderQuoteImg} title={'MEDIA'} lightText={true}/>{' '}
      <CustomSlider/>
      </div>
    </>
  );
};

export default Media;
