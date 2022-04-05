const Contrib_LinkText = (props) => {
    return(
        <a href={props.link} className={props.position} >{props.text}</a> 
    )
}

export default Contrib_LinkText;