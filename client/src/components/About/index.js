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
            <MDBJumbotron className="about text-center">
              <MDBCardTitle className="card-title h4 pb-2">
                <strong>beeherd</strong>
              </MDBCardTitle>

              <MDBCardImage
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(134).jpg"
                className="img-fluid"
              />
              <MDBCardBody>

                <MDBCardText className="middle-page">
                  Hey, little bee!
                  Here at beeherd, your posts are the essence of the site. The greatest good you can do for one another is to share who you are being here and now in order to create connection and community.
                  Feel free to resgister anonymously. Sign-in, vent on, and let yourself beeherd.
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
