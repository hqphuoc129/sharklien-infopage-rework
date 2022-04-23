import { Carousel } from 'antd';
import { CaretRightOutlined, CaretLeftOutlined } from '@ant-design/icons';
import 'App.scss';

import VietNam from '../../lang/vn.json';
import {FormattedMessage, FormattedDate} from 'react-intl';
import { people } from './people';

function TestimonialsSlider() {
  return (
    <div className='slider_container'>
      <h1 className='slider_header'><FormattedMessage id="home-page.title-testimonial" defaultMessage={VietNam['home-page']['title-testimonial']}/></h1>
      <Carousel autoplay arrows={true} nextArrow={<CaretRightOutlined />} prevArrow={<CaretLeftOutlined />}>
        {people.map((person) => (
          <div key={person.id} className='slider_content'>
            <div className='slide_item-container'>
              <div className='slide_item-content'>
                <div className='portrait-mobile-img'>
                  <img className='portrait-mobile' src={person.avatar}></img>
                </div>
                <div className='slide_item-text'>
                  {person.name}
                  <br></br>
                  {person.position}
                </div>
                <div className='slide_item-text-mobile'>
                  <h2>{person.name}</h2>
                  <p>{person.position}</p>
                </div>
              </div>
              <p className='slide_item-footer'>{person.text}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default TestimonialsSlider;
