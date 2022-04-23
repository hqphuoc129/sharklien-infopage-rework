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
        <FormattedMessage id="nuocsach-page.para1" defaultMessage={VietNam['nuocsach-page']['para1']}/>
      </p>
      <p>
        <FormattedMessage id="nuocsach-page.para2" defaultMessage={VietNam['nuocsach-page']['para2']}/>
      </p>
      <p>
        <FormattedMessage id="nuocsach-page.para3" defaultMessage={VietNam['nuocsach-page']['para3']}/>
      </p>
      <p>
        <FormattedMessage id="nuocsach-page.para4" defaultMessage={VietNam['nuocsach-page']['para4']}/>
      </p>
      <ul>
            <li><FormattedMessage id="nuocsach-page.para4-li1" defaultMessage={VietNam['nuocsach-page']['para4-li1']}/></li>
            <li><FormattedMessage id="nuocsach-page.para4-li2" defaultMessage={VietNam['nuocsach-page']['para4-li2']}/></li>
            <li><FormattedMessage id="nuocsach-page.para4-li3" defaultMessage={VietNam['nuocsach-page']['para4-li3']}/></li>
            <li><FormattedMessage id="nuocsach-page.para4-li4" defaultMessage={VietNam['nuocsach-page']['para4-li4']}/></li>
      </ul>
      <p>
        <FormattedMessage id="nuocsach-page.para5" defaultMessage={VietNam['nuocsach-page']['para5']}/>
      </p>
      <p>
        <FormattedMessage id="nuocsach-page.para6" defaultMessage={VietNam['nuocsach-page']['para6']}/><a className="link-click" href="https://aquaone.vn" > aquaone.vn</a>
      </p>
    </div>
    <CauouselSliderContainer vidlist= {vid_nuocsach} linkClass={"carousel-media"} title={<FormattedMessage id="nuocsach-page.vid-section-title" defaultMessage={VietNam['nuocsach-page']['vid-section-title']}/>} totalNum ={3}/>
    </> 
  );
};

export default Water;
