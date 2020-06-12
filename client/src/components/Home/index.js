import React, { Component } from "react";
import Container from "../Container";
import Hero from "../Hero";
import "./style.css";
import { redirectToPost } from "./scripts";
import {
  MDBRow,
  MDBCol
} from "mdbreact";

class Home extends Component {
  render() {
    return (
      <div className="container-home">
        <Hero backgroundImage="https://images.pexels.com/photos/775907/pexels-photo-775907.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260">
          <MDBRow>
            <MDBCol size="12">
              <h1 class="animate__animated animate__swing">beeherd</h1>
              <h2>Leave your troubles here</h2>
            </MDBCol>
          </MDBRow>
        </Hero>
        <div class="mini-post">
          <input type="test" id="mini-post-text" size="50" placeholder="Say something." onClick={redirectToPost}></input><button onClick={redirectToPost}>Post</button>
        </div>
      <Container style={{ marginTop: 25 }}>
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Placeholder Title</h5>
                <p className="card-text">Placeholder Text</p>
                <a href="/" className="btn">
                  See More
                  </a>
              </div>
            </div>
          </div>
          <div className="col-sm-12">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Placeholder Title</h5>
                <p className="card-text">Placeholder Text</p>
                <a href="/" className="btn">
                See More
                  </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Placeholder Title</h5>
                <p className="card-text">Placeholder Text</p>
                <a href="/" className="btn">
                See More
                  </a>
              </div>
            </div>
          </div>
          <div className="col-sm-12">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Placeholder Title</h5>
                <p className="card-text">Placeholder Text</p>
                <a href="/" className="btn">
                See More
                  </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Placeholder Title</h5>
                <p className="card-text">Placeholder Text</p>
                <a href="/" className="btn">
                See More
                  </a>
              </div>
            </div>
          </div>
          <div className="col-sm-12">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Placeholder Title</h5>
                <p className="card-text">Placeholder Text</p>
                <a href="/" className="btn">
                See More
                  </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
      </div >
    );
  }
}

export default Home;
