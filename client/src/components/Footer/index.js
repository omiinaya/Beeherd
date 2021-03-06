import React, { Component } from 'react'
import "./style.css";

class Footer extends Component {
  render() {
    return (
      <footer className="footer-container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
              <div className="footer">
                <span role="img" aria-label="peace">✌️</span>
                <ul>
                  <li><a href="https://github.com/omiinaya/OKAJ">github</a></li>
                  <li><a href="https://github.com/omiinaya/OKAJ">&nbsp; site made by Team OKAJ</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;