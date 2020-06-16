import React from "react";
//import { BrowserRouter as Router } from "react-router-dom";
import "./styles.css";
import {
  MDBJumbotron,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBCardTitle,
  MDBCardImage,
  MDBCardBody,
  MDBCardText,
} from "mdbreact";

function About() {
  return (
    <div id="classicformpage">
      <MDBContainer className="mt-5 text-center">
        <MDBRow>
          <MDBCol>
            <MDBJumbotron className="text-center">
              <MDBCardTitle className="card-title h4 pb-2">
                <strong>beeherd</strong>
              </MDBCardTitle>

              <MDBCardImage
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(134).jpg"
                className="img-fluid"
              />
              <MDBCardBody>

                <MDBCardText className="middle-page">
                  At beeherd posts are the essence of the site. The greatest good you can do for one another is to share and connect with one another.
                  Feel free to resgister anonynously. Sign-in, vent on, and let your
                  voice beeheard.
                </MDBCardText>

                <MDBCol className="d-flex justify-content-center mt-4" md="12">
                  <MDBCol md="3" className="d-flex justify-content-around">
                  <MDBBtn href="/" gradient="purple">Posts</MDBBtn>
                  
                  </MDBCol>
                </MDBCol>
              </MDBCardBody>
            </MDBJumbotron>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}

export default About;
