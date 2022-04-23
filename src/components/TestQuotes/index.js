import TestQuoteLien from 'components/TestQuotes/assets/quotes-05.png';
import QuoteMobileImage from 'components/TestQuotes/assets/quotemobile.jpg';

import VietNam from '../../lang/vn.json';
import {FormattedMessage, FormattedDate} from 'react-intl';

const TestQuotes = (Props) => {
  return (
    <div className='testquotes-container'>
      <div className='box-quotestitle'>
        <div className='quotetitle-container'>
          <h1 className='title-one'><FormattedMessage id="home-page.quotes-1" defaultMessage={VietNam['home-page']["quotes-1"]}/></h1>
          <h1 className='title-two'><FormattedMessage id="home-page.quotes-2" defaultMessage={VietNam['home-page']["quotes-2"]}/></h1>
        </div>
      </div>
      <div className='testquotes-img-holder'>
        <img className='box-imglien-desktop' src={TestQuoteLien} alt='' />
        <img className='box-imglien-mobile' src={QuoteMobileImage} alt='' />
      </div>
    </div>
  );
};
export default TestQuotes;
