import React, { Component } from 'react'
import "./style.css";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
              <p>&copy; All Rights Reserved By <a href="/" target="_blank">OKAJ 2020</a></p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;