import CauouselSliderContainer from 'components/CarouselSliderContainer'; 

import nuocsach1 from './assets/nuocsach1.jpg';
import nuocsach2 from './assets/nuocsach2.jpg';
import nuocsach3 from './assets/nuocsach3.jpg';
import nuocsach4 from './assets/nuocsach4.jpg';
import SelectLang from 'components/Language/selectLang';
import VietNam from '../../lang/vn.json';

import {FormattedMessage, FormattedDate} from 'react-intl';

const vid_nuocsach = [
  {
      image : nuocsach1,
      id : "DXazqJr-ppg",
  
  }, 
  {
      image : nuocsach2,
      id : "wbn-fNpMhGs",
  },
  {
      image : nuocsach3,
      id : "Nh3w7N2g8ps",

  },
  {
      image : nuocsach4,
      id : "ObtPg8S3T-k",

  },]
const Water = () => {
  return (
    <>
    <div className='water-content insurance-content-mobile'>
      <p>
        <FormattedMessage id="conghien-page.para1" defaultMessage={VietNam['conghien-page']['para1']}/>
      </p>
      <p>
        <FormattedMessage id="conghien-page.para2" defaultMessage={VietNam['para2']}/>
      </p>
      <p>
        <FormattedMessage id="conghien-page.para3" defaultMessage={VietNam['para3']}/>
      </p>
      <p>
        <FormattedMessage id="conghien-page.para4" defaultMessage={VietNam['para4']}/>
      </p>
      <p>
        <FormattedMessage id="conghien-page.para5" defaultMessage={VietNam['para5']}/>
      </p>
      <p>
        <FormattedMessage id="conghien-page.para6" defaultMessage={VietNam['para6']}/><a className="link-click" href="https://aquaone.vn" ><FormattedMessage id="conghien-page.web-link" defaultMessage={VietNam['web-link']}/></a>
      </p>
      <p>
      <FormattedMessage id="conghien-page.vid-section-title" defaultMessage={VietNam['vid-section-title']}/></p>
    </div>
    <CauouselSliderContainer vidlist= {vid_nuocsach} linkClass={"carousel-media"} title={"Các video liên quan"} totalNum ={3}/>
    </> 
  );
};

export default Water;
