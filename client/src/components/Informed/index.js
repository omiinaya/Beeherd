import React, { Component } from 'react'
import Hero from "../Hero";
import "./style.css"

class Informed extends Component {
  render() {
    return (
      <div>
        <Hero backgroundImage="https://images.unsplash.com/photo-1549814892-f6a520afc97d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60">
          <h1>Get Informed Page</h1>
        </Hero>
      </div>
    );
  }
}

export default Informed;
