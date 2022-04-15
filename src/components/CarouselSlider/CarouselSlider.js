import "antd/dist/antd.css";
import { Carousel } from "antd";
import CarouselSliderImg1 from "components/CarouselSlider/assets/CarouselSliderImg1.jpg";
import CarouselSliderImg2 from "components/CarouselSlider/assets/CarouselSliderImg2.jpg";
import CarouselBackgroundImg from "components/CarouselSlider/assets/carousel-mobile.jpg";
const LIST_IMG = [CarouselSliderImg1,CarouselSliderImg2];

const CarouselSlider = () => {
  return (
    <div className="carousel-mobile">
      <img src={CarouselBackgroundImg} className="carousel-mobile-img"/>
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
