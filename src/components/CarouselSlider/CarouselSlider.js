import "antd/dist/antd.css";
import { Carousel } from "antd";
import BannerImage1 from "assets/banner1.png";
import BannerImage2 from "assets/banner2.png";

const LIST_IMG = [BannerImage1,BannerImage2];

const CarouselSlider = () => {
  return (
      <Carousel autoplay >
        {LIST_IMG.map((item, idx) => (
          <div className="carousel-background"><img src={item} key={idx} className="carousel-image"/></div>
        ))}
      </Carousel>
  );
};
export default CarouselSlider;