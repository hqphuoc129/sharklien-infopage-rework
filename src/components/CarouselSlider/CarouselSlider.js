import "antd/dist/antd.css";
import { Carousel } from "antd";
import CarouselSliderImg1 from "components/CarouselSlider/assets/CarouselSliderImg1.webp";
import CarouselSliderImg2 from "components/CarouselSlider/assets/CarouselSliderImg2.webp";

const LIST_IMG = [CarouselSliderImg1,CarouselSliderImg2];

const CarouselSlider = () => {
  return (
      <Carousel autoplay>
        {LIST_IMG.map((item, idx) => (
          <div className="carousel-background">
            <img src={item} key={idx}/>
          </div>
        ))}
      </Carousel>
  );
};
export default CarouselSlider;
