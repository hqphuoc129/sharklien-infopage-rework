
import Contrib_LinkText from '../../components/ContriB LinkText';
const LotusComponent = (props) => {
    return (
        <div className="lotus-container" >
            <div className="lotus-flex"> 
                <img className="lotus-background" src={props.url} alt="lotus"/>
            </div>
            <div className="lotus-containtext">
                <Contrib_LinkText text={`"bà đỡ" start-up`} position="leaf-one" link="https://www.facebook.com/"/>
                <Contrib_LinkText text={`Nước sạch`} position="leaf-two" link="https://www.facebook.com/"/>
                <Contrib_LinkText text={`Bảo hiểm`} position="leaf-three" link="https://www.facebook.com/"/>
                <Contrib_LinkText text={`Thiện nguyện`} position="leaf-four" link="https://www.facebook.com/"/>
                <Contrib_LinkText text={`Ngoại giao`} position="leaf-five" link="https://www.facebook.com/"/>
                
            </div>

        </div>
    );
}

export default LotusComponent;