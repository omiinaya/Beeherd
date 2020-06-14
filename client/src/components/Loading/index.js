import React from "react";
import "./style.css"

const Loading = () => {
  return (
      <div className="spinner-border" 
      role="status" 
      style={{
        flex: 1,
        justifyContent: 'center',
        }}>
        <span className="sr-only"
        style={{
          flex: 1,
          alignSelf: 'center'
        }}>Loading...</span>
      </div>
  );
}

export default Loading;