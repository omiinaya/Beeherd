import React from "react";
//import { BrowserRouter as Router } from "react-router-dom";
import Footer from '../Footer'
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
                src="https://thehill.com/sites/default/files/honeybees_bees_istock.jpg"
                className="img-fluid"
              />
              <MDBCardBody>
                <MDBCardText className="middle-page aboutText">
                  Hey, little bee!
                  Here at beeherd, your posts are the essence of this site. The greatest good you can do for one another is to share who you are being here and now in order to create connection and community.
                  Feel free to register anonymously. Sign-in, vent on, and let yourself beeherd.
                </MDBCardText>
                <MDBCol className="d-flex justify-content-center mt-4" md="12">
                  <MDBCol md="3" className="d-flex justify-content-around">
                    <MDBBtn href="/" gradient="purple" className="PostColor">Go Say Something</MDBBtn>
                  </MDBCol>
                </MDBCol>
              </MDBCardBody>
            </MDBJumbotron>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <Footer />
    </div>
  );
}

export default About;
