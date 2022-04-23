import IndexInsurance from 'components/IndexInsurance/IndexInsurance';
import IndexWater from 'components/IndexWater/IndexWater';
import IndexStartup from 'components/IndexStartup/IndexStartup';
import IndexDiplomacy from 'components/IndexDiplomacy/IndexDiplomacy';

import VietNam from '../../lang/vn.json';
import {FormattedMessage, FormattedDate} from 'react-intl';

const INDEX_COMBINE = [IndexInsurance, IndexWater, IndexStartup, IndexDiplomacy];

const IndexCombine = () => {
  return (
    <div className='mobile-indexgroup-background'>
      <div className="index-combine-title"><FormattedMessage id="home-page.title-section-contribu" defaultMessage={VietNam['home-page']["title-section-contribu"]}/></div>
      <div className='index-combine-container'>
        <IndexInsurance />
        <IndexWater />
        <IndexStartup />
        <IndexDiplomacy />
      </div>
    </div>


  );
};

export default IndexCombine;
