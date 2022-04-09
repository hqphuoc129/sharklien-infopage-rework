
import Contrib_LinkText from '../../components/ContriB LinkText';
const LotusComponent = (props) => {
    return (
        <div className="lotus-container" >
            <div className="lotus-flex"> 
                <img className="lotus-background" src={props.url} alt="lotus"/>
            </div>
            <div className="lotus-containtext">
                <Contrib_LinkText text={`"bà đỡ" start-up`} position="leaf-one" index="4"/>
                <Contrib_LinkText text={`Nước sạch`} position="leaf-two" index="1"/>
                <Contrib_LinkText text={`Bảo hiểm`} position="leaf-three" index="0"/>
                <Contrib_LinkText text={`Thiện nguyện`} position="leaf-four" index="2"/>
                <Contrib_LinkText text={`Ngoại giao`} position="leaf-five" index="3"/>
                
            </div>

        </div>
    );
}

export default LotusComponent;