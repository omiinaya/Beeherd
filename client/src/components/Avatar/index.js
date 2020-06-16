import React, { Component } from 'react'
import { render } from "react-dom";
import $ from 'jquery'
import "./style.css";

class Avatar extends Component {
    componentDidMount() {
        $("button").click(function () {
            $("h1").toggleClass("red");
        });
    }
    render() {
        return (
            <div className="Avatar">
                <h1>jquery in React App</h1>
                <button>Click Me</button>
            </div>
        )
    }
}

export default Avatar;
