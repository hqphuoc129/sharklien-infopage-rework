import {FormattedMessage, FormattedDate} from 'react-intl';
import VietNam from '../../lang/vn.json';
import Contrib_LinkText from '../../components/ContriB LinkText';
const LotusComponent = (props) => {
    return (
        <div className="lotus-container" >
            <div className="lotus-flex"> 
                <img className="lotus-background" src={props.url} alt="lotus"/>
            </div>
            <div className="lotus-containtext">
                <Contrib_LinkText text={<FormattedMessage id="lotus.startup" defaultMessage={VietNam['lotus']['startup']}/>} position="leaf-one" index="4"/>
                <Contrib_LinkText text={<FormattedMessage id="lotus.water" defaultMessage={VietNam['lotus']['water']}/>} position="leaf-two" index="1"/>
                <Contrib_LinkText text={<FormattedMessage id="lotus.insurance" defaultMessage={VietNam['lotus']['insurance']}/>} position="leaf-three" index="0"/>
                <Contrib_LinkText text={<FormattedMessage id="lotus.charity" defaultMessage={VietNam['lotus']['charity']}/>} position="leaf-four" index="2"/>
                <Contrib_LinkText text={<FormattedMessage id="lotus.diplomacy" defaultMessage={VietNam['lotus']['diplomacy']}/>} position="leaf-five" index="3"/>
                
            </div>

        </div>
    );
}

export default LotusComponent;