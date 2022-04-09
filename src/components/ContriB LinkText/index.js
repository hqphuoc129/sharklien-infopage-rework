import {Link, useNavigate} from 'react-router-dom';

const Contrib_LinkText = (props) => {
    const data = props.index
    console.log (data)
    const navigate = useNavigate()
    const toDetail = (data) => {
        navigate ("/details",{state: data});
    }
    return(
        <a className={props.position} onClick={()=> {toDetail(data)}}>{props.text}</a> 
        
    )
}

export default Contrib_LinkText;