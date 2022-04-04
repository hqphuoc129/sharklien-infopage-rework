const Contribute_Descrpition = (props) => {
    return (
        <div className="div-descript"
            style= {{
                backgroundImage: `url(${props.img})`}}>
            <div className={'title-contrib' +" "+ `${props.lightText ? 'light-theme' : 'dark-theme'}`}>
                {props.title}
            </div>
        </div> 
    )
}

export default Contribute_Descrpition;
