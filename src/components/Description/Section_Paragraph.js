const Section_Paragraph = props => {
    return ( 
    <p style = {{ textAlign: "justify", marginLeft: "10%", marginRight: "10%", marginBottom: "5%", fontSize: "21pt", lineHeight: "1.5" } } > { props.content } </p>
    )
}

export default Section_Paragraph;