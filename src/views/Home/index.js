import TestimonialsSlider from '../../components/TestimonialsSlider/index';
import Gallery from '../../components/Gallery Home/index';
import CarouselSlider from "components/CarouselSlider/CarouselSlider"
import Section2 from "components/Section2/Section2"
const Home = () => {
  return (
    <>
    <CarouselSlider/>
      <Section2 />
      <TestimonialsSlider />
      <Gallery />
    </>
  );
};

export default Home;
