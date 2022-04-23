import CauouselSliderContainer from 'components/CarouselSliderContainer'; 

import startup1 from './assets/startup1.jpg';
import startup2 from './assets/startup2.jpg';
import nothumbnails from './assets/nothumbnails.png';
import {FormattedMessage, FormattedDate} from 'react-intl';
import VietNam from '../../lang/vn.json';
const vid_startup = [
  {
      image : startup1,
      id : "ibFhn_tHhWw",
  
  }, 
  {
      image : startup2,
      id : "PuU8OeyclwE",
  },
  {
      image : nothumbnails,
      id : "eR4UifvkQUw",

  },
  {
    image : nothumbnails,
    id : "vHAqAPWevTA",

  },]

const Startup = () => {
  return (
    <>
    <div className='startup-content insurance-content-mobile'>
      <p>
        <FormattedMessage id="bado-page.para1" defaultMessage={VietNam['bado-page']['para1']}/>
      </p>
      <p>
        <FormattedMessage id="bado-page.para2" defaultMessage={VietNam['bado-page']['para2']}/>
      </p>
      <p>
        <FormattedMessage id="bado-page.para3" defaultMessage={VietNam['bado-page']['para3']}/>
      </p>
      <p>
      <FormattedMessage id="bado-page.para4" defaultMessage={VietNam['bado-page']['para4']}/>
      </p>
      <p>
      <FormattedMessage id="bado-page.para5" defaultMessage={VietNam['bado-page']['para5']}/> <a className="link-click" href="https://svv.vn" >svv.vn</a>
      </p>
    </div>
    <CauouselSliderContainer vidlist= {vid_startup} linkClass={"carousel-media"} title={"Các video liên quan"} totalNum ={3}/>
    </>
  );
};

export default Startup;
