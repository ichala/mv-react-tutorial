import React from "react"

const Header = () => {

  const headerStyle = {
    padding: "20px 0",
    lineHeight: "1.5em",
  }
  const H1Styles = { fontSize: "6rem", fontWeight: "600", marginBottom: "2rem", lineHeight: "1em", color: "#ececec", textTransform: "uppercase", textAlign: "center" };
  
  return (
    <header style={headerStyle}>
      <h1 style={H1Styles}>To Do App</h1>
    </header>
  )
}

export default Header