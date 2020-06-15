import React from "react";
import "./style.css";

function Jumbo(props) {
  return (
    <div className="jumbo text-center" style={{ 
      backgroundImage: `url(${props.backgroundImage})`,
      backgroundPositionY:`${props.backgroundPositionY}`,
      backgroundPositionX:`${props.backgroundPositionX}`
     }}>
      {props.children}
    </div>
  );
}

export default Jumbo;