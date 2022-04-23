import IndexDiplomacyImg from "components/IndexDiplomacy/assets/IndexDiplomacyImg.png";

import VietNam from '../../lang/vn.json';
import {FormattedMessage, FormattedDate} from 'react-intl';
const IndexDiplomacy = () => {
    return (
        <div className="index-group-container">
            <div className="index-img-holder"> <img src={IndexDiplomacyImg} className="index-diplomacy-img" /> </div>
            <div className="index-group-title"><FormattedMessage id="home-page.title-ng-tn" defaultMessage={VietNam['home-page']["title-ng-tn"]}/></div>
            <div className="index-group-text"><FormattedMessage id="home-page.thiennguyen-ngoaigiao" defaultMessage={VietNam['home-page']["thiennguyen-ngoaigiao"]}/></div>
        </div>
    )
}

export default IndexDiplomacy;