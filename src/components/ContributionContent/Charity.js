import CauouselSliderContainer from 'components/CarouselSliderContainer'; 

import tuthien1 from './assets/tuthien1.jpg';
import tuthien2 from './assets/tuthien2.jpg';
import tuthien3 from './assets/tuthien3.jpg';
import tuthien4 from './assets/tuthien4.jpg';
import tuthien5 from './assets/tuthien5.jpg';
import tuthien6 from './assets/tuthien6.jpg';
import tuthien7 from './assets/tuthien7.jpg';
import nothumbs from './assets/nothumbnails.png';

import {FormattedMessage, FormattedDate} from 'react-intl';
import VietNam from '../../lang/vn.json';
const vid_tuthien = [
  {
      image : tuthien1,
      id : "rfrIcA381dA",
  
  }, 
  {
      image : tuthien2,
      id : "5Qx_BBHvRj0",
  },
  {
      image : tuthien3,
      id : "SgbQMXN3PBc",

  }, 
  {
      image : tuthien4,
      id : "l0lGK75iJ7w",
  },
  {
      image : tuthien5,
      id : "zylr8yOeO_8",

  }, 
  {
      image : tuthien6,
      id : "4TiHEbbVtGs",
  },
  {
      image : tuthien7,
      id : "8fOn2dhbiRQ",

  },
  {
    image : nothumbs,
    id : "5pvvAXnnmV4",

  }, 
  {
      image : nothumbs,
      id : "-v4Au0unNG4",
  },
  {
      image : nothumbs,
      id : "5pvvAXnnmV4",

  },]

const Charity = () => {
  return (
  <>
    
    <div className='insurance-content-mobile charity-content'>
      <p>
        <FormattedMessage id="thiennguyen-page.para1" defaultMessage={VietNam['thiennguyen-page']['para1']}/>
      </p>
      <p>
        <FormattedMessage id="thiennguyen-page.para2" defaultMessage={VietNam['thiennguyen-page']['para2']}/>
      </p>
      <p>
        <FormattedMessage id="thiennguyen-page.para3" defaultMessage={VietNam['thiennguyen-page']['para3']}/>
      </p>
      {/* <p>
      <FormattedMessage id="thiennguyen-page.para3-li1" defaultMessage={VietNam['thiennguyen-page']['para3-li1']}/>
      </p>
      <p>
      <FormattedMessage id="thiennguyen-page.para3-li2" defaultMessage={VietNam['thiennguyen-page']['para3-li2']}/>
      </p>
      <p>
      <FormattedMessage id="thiennguyen-page.para3-li3" defaultMessage={VietNam['thiennguyen-page']['para3-li3']}/>
      </p>
      <p>
      <FormattedMessage id="thiennguyen-page.para3-li4" defaultMessage={VietNam['thiennguyen-page']['para3-li4']}/>
      </p>
      <p>
      <FormattedMessage id="thiennguyen-page.para3-li5" defaultMessage={VietNam['thiennguyen-page']['para3-li5']}/>
      </p>
      <p>
      <FormattedMessage id="thiennguyen-page.para3-li6" defaultMessage={VietNam['thiennguyen-page']['para3-li6']}/>
      </p>
      <p>
      <FormattedMessage id="thiennguyen-page.para3-li7" defaultMessage={VietNam['thiennguyen-page']['para3-li7']}/>
      </p>
      <p>
      <FormattedMessage id="thiennguyen-page.para3-li8" defaultMessage={VietNam['thiennguyen-page']['para3-li8']}/>
      </p>
      <p>
      <FormattedMessage id="thiennguyen-page.para3-li9" defaultMessage={VietNam['thiennguyen-page']['para3-li9']}/>
      </p> */}
      <ul>
            <li><FormattedMessage id="thiennguyen-page.para3-li1" defaultMessage={VietNam['thiennguyen-page']['para3-li1']}/></li>
            <li><FormattedMessage id="thiennguyen-page.para3-li2" defaultMessage={VietNam['thiennguyen-page']['para3-li2']}/></li>
            <li><FormattedMessage id="thiennguyen-page.para3-li3" defaultMessage={VietNam['thiennguyen-page']['para3-li3']}/></li>
            <li><FormattedMessage id="thiennguyen-page.para3-li4" defaultMessage={VietNam['thiennguyen-page']['para3-li4']}/></li>
            <li><FormattedMessage id="thiennguyen-page.para3-li5" defaultMessage={VietNam['thiennguyen-page']['para3-li5']}/></li>
            <li><FormattedMessage id="thiennguyen-page.para3-li6" defaultMessage={VietNam['thiennguyen-page']['para3-li6']}/></li>
            <li><FormattedMessage id="thiennguyen-page.para3-li7" defaultMessage={VietNam['thiennguyen-page']['para3-li7']}/></li>
            <li><FormattedMessage id="thiennguyen-page.para3-li8" defaultMessage={VietNam['thiennguyen-page']['para3-li8']}/></li>
            <li><FormattedMessage id="thiennguyen-page.para3-li9" defaultMessage={VietNam['thiennguyen-page']['para3-li9']}/></li>
      </ul>
      <p>
      <FormattedMessage id="thiennguyen-page.para4" defaultMessage={VietNam['thiennguyen-page']['para4']}/> <a className="link-click" href="https://gvf.vn" >gvf.vn</a>
      </p>
    </div>
    <CauouselSliderContainer vidlist= {vid_tuthien} linkClass={"carousel-media"} title={<FormattedMessage id="thiennguyen-page.vid-section-title" defaultMessage={VietNam['thiennguyen-page']['vid-section-title']}/>} totalNum ={3}/>
  </>
  );
};

export default Charity;
