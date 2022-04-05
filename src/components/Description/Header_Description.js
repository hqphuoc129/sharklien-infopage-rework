const HeaderDescription = props => {
    return ( 
        <div>
            <h2 style = {
            { textAlign: "center", paddingTop: "5%", fontSize: "36pt" } } > { props.title } </h2> 
        </div>
    )
}

export default HeaderDescription;