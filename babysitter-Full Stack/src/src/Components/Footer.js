import React from "react";

function Footer() {
  return (
    <footer style={{ 
      backgroundColor: "black", 
      color: "white", 
      width: "100%",
      position: "fixed",
      bottom: 0
    }}>
      <div className="container-fluid">
        <span style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>

          <span style={{ flex: "1", textAlign: "center" }}>© 2024 Babysitter  copyright@</span>
        </span> 
      </div>
    </footer>
  );
}

export default Footer;




















