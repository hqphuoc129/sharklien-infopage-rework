import CauouselSliderContainer from 'components/CarouselSliderContainer'
import baohiem1 from './assets/baohiem1.jpg';
import baohiem2 from './assets/baohiem2.jpg';
import {isMobile} from "react-device-detect";
import {FormattedMessage, FormattedDate} from 'react-intl';
import VietNam from '../../lang/vn.json';
const vid_baohiem = [
  {
      image : baohiem1,
      id : "oTMcxMt3Few",
  
  }, 
  {
      image : baohiem2,
      id : "gW-qrQqjK6s",
  },]
const Insurance = () => {
  if (isMobile){
    return (
      <>
      <div className='insurance-content-mobile insurance-content'>
        <p>
          <FormattedMessage id="baohiem-page.para1" defaultMessage={VietNam['baohiem-page']['para1']}/>
        </p>
        <p><FormattedMessage id="baohiem-page.para2" defaultMessage={VietNam['baohiem-page']['para2']}/></p>
        <p><FormattedMessage id="baohiem-page.para2-li1" defaultMessage={VietNam['baohiem-page']['para2-li1']}/></p>
        <p>
          <FormattedMessage id="baohiem-page.para2-li2" defaultMessage={VietNam['baohiem-page']['para2-li2']}/>
        </p>
        <p><FormattedMessage id="baohiem-page.para2-li3" defaultMessage={VietNam['baohiem-page']['para2-li3']}/></p>
        <p>
          <FormattedMessage id="baohiem-page.para2-li4" defaultMessage={VietNam['baohiem-page']['para2-li4']}/>
        </p>
        <p>
          <FormattedMessage id="baohiem-page.para2-li5" defaultMessage={VietNam['baohiem-page']['para2-li5']}/>
        </p>
        <p>
        <FormattedMessage id="baohiem-page.para3" defaultMessage={VietNam['baohiem-page']['para3']}/> <a className="link-click" href="https://lian.vn" >lian.vn</a>
        </p>
      </div>
      <CauouselSliderContainer vidlist= {vid_baohiem} linkClass={"carousel-2items"} title={"Các video liên quan"} totalNum ={1}/> 
      </>
    )
  }
  return (
    <div className='insurance-content'>
      <p>
        <FormattedMessage id="baohiem-page.para1" defaultMessage={VietNam['baohiem-page']['para1']}/>
      </p>
      <p><FormattedMessage id="baohiem-page.para2" defaultMessage={VietNam['baohiem-page']['para2']}/></p>
      <p><FormattedMessage id="baohiem-page.para2-li1" defaultMessage={VietNam['baohiem-page']['para2-li1']}/></p>
      <p>
        <FormattedMessage id="baohiem-page.para2-li2" defaultMessage={VietNam['baohiem-page']['para2-li2']}/>
      </p>
      <p><FormattedMessage id="baohiem-page.para2-li3" defaultMessage={VietNam['baohiem-page']['para2-li3']}/></p>
      <p>
      <FormattedMessage id="baohiem-page.para2-li4" defaultMessage={VietNam['baohiem-page']['para2-li4']}/>
      </p>
      <p>
      <FormattedMessage id="baohiem-page.para2-li5" defaultMessage={VietNam['baohiem-page']['para2-li5']}/>
      </p>
      <p>
        Tham quan dự án bảo hiểm công nghệ của tôi: <a className="link-click" href="https://lian.vn" >lian.vn</a>
      </p>
      <CauouselSliderContainer vidlist= {vid_baohiem} linkClass={"carousel-2items"} title={"Các video liên quan"} totalNum ={2}/> 
    </div>
  );
};

export default Insurance;
