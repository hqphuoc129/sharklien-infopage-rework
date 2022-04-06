import Portrait from './assets/marko walde.png';
import { Carousel } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
import 'App.scss';

function TestimonialsSlider() {
  return (
    <div className='slider_container'>
      <h1 className='slider_header'> Để đi xa, chúng ta luôn cần có những người ủng hộ mình.</h1>
      <Carousel autoplay>
        <div className='slider_content'>
          <div className='slide_item-container'>
            <div className='slide_item-content'>
              <img src = {Portrait}></img>
              <p className='slide_item-text'>
              Ông Marko Walde, Trưởng Đại diện Phòng Thương mại và Công nghiệp Đức tại Việt Nam (AHK):
              </p> 
              <div className='slide_button'>
                <CaretRightOutlined/>
              </div>       
            </div>
            <p className='slide_item-footer'>
            “Tôi đã làm việc ở Việt Nam rất lâu và từng gặp gỡ làm việc với bà Liên và gia đình bà nhiều lần. Thời gian qua bà đã làm rất nhiều dự án tuyệt vời, bao gồm việc đầu tư qua Đức. Điều này chứng minh cho mối quan hệ song phương bền chặt của chúng ta, không chỉ người Đức đầu tư vào Việt Nam mà người Việt Nam cũng có thể tìm kiếm cơ hội đầu tư và làm điều gì đó cho nước Đức. Chính điều đó mới thực sự ý nghĩa”. 
            </p>
          </div>
        </div>
        <div className='slider_content'>
          <div className='slide_item-container'>
            <div className='slide_item-content'>
              <img src = {Portrait}></img>
              <p className='slide_item-text'>
              Ông Marko Walde, Trưởng Đại diện Phòng Thương mại và Công nghiệp Đức tại Việt Nam (AHK):
             </p>
            <div className='slide_button'>
                <CaretRightOutlined/>
              </div>   
            </div>
            <p className='slide_item-footer'>
            “Tôi đã làm việc ở Việt Nam rất lâu và từng gặp gỡ làm việc với bà Liên và gia đình bà nhiều lần. Thời gian qua bà đã làm rất nhiều dự án tuyệt vời, bao gồm việc đầu tư qua Đức. Điều này chứng minh cho mối quan hệ song phương bền chặt của chúng ta, không chỉ người Đức đầu tư vào Việt Nam mà người Việt Nam cũng có thể tìm kiếm cơ hội đầu tư và làm điều gì đó cho nước Đức. Chính điều đó mới thực sự ý nghĩa”. 
            </p>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default TestimonialsSlider;