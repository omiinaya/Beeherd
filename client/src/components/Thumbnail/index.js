import React from "react";
import "./style.css"
import Placeholder from './images/placeholder.png'
//import { urlencoded } from "body-parser";

function Thumbnail({ src }) {
  return (
    <div
    className="thumbnail"
      role="img"
      aria-label="Recipe Image"
      style={{
        //backgroundImage: `url(${src})`
        backgroundImage: `url(${Placeholder})`
      }}
    />
  );
}

export default Thumbnail;