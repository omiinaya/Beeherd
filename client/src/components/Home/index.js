import React, { Component } from "react";
import Hero from "../Hero";
import "./style.css";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
} from "mdbreact";

class Home extends Component {
  render() {
    return (
      <div className="container-home">
        <header class="image-container">
          <MDBRow>
            <MDBCol size="12">
              <Hero backgroundImage="https://images.pexels.com/photos/775907/pexels-photo-775907.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260">
                <MDBRow>
                  <MDBCol size="12">
                    <h1 class="animate__animated animate__swing">beeherd</h1>
                    <h2>Leave your troubles here</h2>
                    <a href="/resources" className="btn">
                      Get Informed
                    </a>
                  </MDBCol>
                </MDBRow>
              </Hero>
            </MDBCol>
          </MDBRow>
        </header>
        <MDBRow>
          <MDBCol size="6">

          </MDBCol>
        </MDBRow>
      </div>
    );
  }
}

export default Home;
