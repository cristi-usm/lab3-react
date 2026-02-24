const ActiveButton = ({color="#252e4a",textColor="#ffffff", text}) => {

    const buttonStyle = {
    backgroundColor: color, 
    color: textColor,
    padding: "10px 24px",
    borderRadius: "30px",
    border: "none",
    fontWeight: "600",
    cursor: "pointer"
  };
    return(
        <>
            <button style={buttonStyle} >{text}</button>
        </>
    )
}

export default ActiveButton