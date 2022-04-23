import IndexStartupImg from "components/IndexStartup/assets/IndexStartupImg.png";

import VietNam from '../../lang/vn.json';
import {FormattedMessage, FormattedDate} from 'react-intl';
const IndexStartup = () => {
    return (
        <div className="index-group-container">
            <div className="index-img-holder"><img src={IndexStartupImg} className="index-startup-img"/></div>
            <div className="index-group-title"><FormattedMessage id="home-page.title-bado" defaultMessage={VietNam['home-page']["title-bado"]}/></div>
            <div className="index-group-text"><FormattedMessage id="home-page.bado" defaultMessage={VietNam['home-page']["bado"]}/></div>
        </div>
    )
}

export default IndexStartup;