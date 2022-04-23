import CauouselSliderContainer from 'components/CarouselSliderContainer'; 

import ngoaigiao1 from './assets/ngoaigiao1.jpg';
import ngoaigiao2 from './assets/ngoaigiao2.jpg';
import ngoaigiao3 from './assets/ngoaigiao3.jpg';
import {FormattedMessage, FormattedDate} from 'react-intl';
import VietNam from '../../lang/vn.json';

const vid_ngoaigiao = [
  {
      image : ngoaigiao1,
      id : "t_abyjfGBTQ",
  
  }, 
  {
      image : ngoaigiao2,
      id : "QcNjv8etaws",
  },
  {
      image : ngoaigiao3,
      id : "0lvPJKkbgaI",

  },]
const Foreign = () => {
  return (
    <>
    <div className='foreign-content insurance-content-mobile'>
      <p>
        <FormattedMessage id="ngoaigiao-page.para1" defaultMessage={VietNam['ngoaigiao-page']['para1']}/>
      </p>
      <p>
        <FormattedMessage id="ngoaigiao-page.para2" defaultMessage={VietNam['ngoaigiao-page']['para2']}/>
      </p>
      <p>
        <FormattedMessage id="ngoaigiao-page.para3" defaultMessage={VietNam['ngoaigiao-page']['para3']}/>
      </p>
      <p>
        <FormattedMessage id="ngoaigiao-page.para4" defaultMessage={VietNam['ngoaigiao-page']['para4']}/>
      </p>
      <p>
      <FormattedMessage id="ngoaigiao-page.para5" defaultMessage={VietNam['ngoaigiao-page']['para5']}/> <a className="link-click" href="https://southafricahc.com" >southafricahc.com</a>
      </p>
    </div>
    <CauouselSliderContainer vidlist= {vid_ngoaigiao} linkClass={"carousel-media"} title={"Các video liên quan"} totalNum ={3}/>
    </>
  );
};
export default Foreign;
