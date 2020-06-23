import React from "react";
import "./style.css"
import Placeholder from './images/ad.jpg'
//import { urlencoded } from "body-parser";

function Thumbnail({ src }) {
    return (
        <a href="https://www.geico.com" add target="_blank">
            <div
                className="thumbnail"
                role="img"
                aria-label="Recipe Image"
                style={{
                    //backgroundImage: `url(${src})`
                    backgroundImage: `url(${Placeholder})`
                }}
            />
        </a>
    );
}

export default Thumbnail;