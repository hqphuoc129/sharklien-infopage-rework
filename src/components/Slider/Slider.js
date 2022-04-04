import "antd/dist/antd.css";
import { Carousel } from "antd";
import BannerImage1 from "assets/banner1.png";
import BannerImage2 from "assets/banner2.png";
import "./Slider.css"

const LIST_IMG = [BannerImage1,BannerImage2];

const Slider = () => {
  return (
      <Carousel autoplay >
        {LIST_IMG.map((item, idx) => (
          <div className="outer"><img src={item} key={idx} className="inner-image"/></div>
        ))}
      </Carousel>
  );
};
export default Slider;