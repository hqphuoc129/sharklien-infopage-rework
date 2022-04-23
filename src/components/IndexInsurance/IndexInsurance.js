import IndexInsuranceImg from "components/IndexInsurance/assets/IndexInsuranceImg.png";
import VietNam from '../../lang/vn.json';
import {FormattedMessage, FormattedDate} from 'react-intl';
const IndexInsurance = () => {
    return (
        <div className="index-group-container">
            <div className="index-img-holder"><img src={IndexInsuranceImg} className="index-insurance-img" /></div>
            <div className="index-group-title"><FormattedMessage id="home-page.title-baohiem" defaultMessage={VietNam['home-page']["title-baohiem"]}/></div>
            <div className="index-group-text"><FormattedMessage id="home-page.baohiem" defaultMessage={VietNam['home-page']["baohiem"]}/></div>
        </div>
    );
}

export default IndexInsurance;