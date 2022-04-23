import IndexWaterImg from "components/IndexWater/assets/IndexWaterImg.png"

import VietNam from '../../lang/vn.json';
import {FormattedMessage, FormattedDate} from 'react-intl';

const IndexWater = () => {
    return (
        <div className="index-group-container">
            <div className="index-img-holder"><img src={IndexWaterImg} className="index-water-img"/></div>
            <div className="index-group-title"><FormattedMessage id="home-page.title-ncsach" defaultMessage={VietNam['home-page']["title-ncsach"]}/></div>
            <div className="index-group-text"><FormattedMessage id="home-page.ncsach" defaultMessage={VietNam['home-page']["ncsach"]}/></div>
        </div>
    )
}
export default IndexWater;