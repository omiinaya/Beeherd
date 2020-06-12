import React, { Component } from 'react'
import "./style.css";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
            <h1>✌️</h1>
            <ul>
              <li><a href="https://github.com/omiinaya/OKAJ" target="_blank">github</a></li>
              <li><a href="https://github.com/omiinaya/OKAJ" target="_blank">&nbsp; site made by Team OKAJ</a></li>
            </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
 
export default Footer;