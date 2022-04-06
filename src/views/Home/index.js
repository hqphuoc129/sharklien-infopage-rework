import React from 'react';
import BriefIntro from 'components/BriefIntro/BriefIntro';
import IndexCombine from 'components/IndexCombine/IndexCombine';
import TestimonialsSlider from '../../components/TestimonialsSlider/index';
import Gallery from '../../components/Gallery Home/index'

const Home = () => {
  return (
    <>
      <BriefIntro />
      <IndexCombine />
      <TestimonialsSlider />
      <Gallery/>
    </>
  );
};

export default Home;
