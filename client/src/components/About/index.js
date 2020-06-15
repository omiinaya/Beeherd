import React from "react";
//import { BrowserRouter as Router } from "react-router-dom";
import {
  MDBMask,
  MDBRow,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBAnimation
} from "mdbreact";
import "./styles.css";

function About() {



    return (
      <div id="classicformpage">


        <MDBView>
          <MDBMask className="d-flex justify-content-center align-items-center gradient">
            <MDBContainer>
              <MDBRow>
                <MDBAnimation
                  type="fadeInLeft"
                  delay=".3s"
                  className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5"
                >
                  <h1 className="h1-responsive font-weight-bold">
                    beeheard
                  </h1>
                  <hr className="hr-light" />
                  <h6 className="mb-4">
                  Posts are the heart of a beheard. When logged in to your account, create a new post. Feel free to vent and let your voice beheard. Explore through the website reading existing post and remember, "It okay to feel":
                  </h6>
                  <MDBBtn outline color="white">
                    Learn More
                  </MDBBtn>
                </MDBAnimation>

                
              </MDBRow>
            </MDBContainer>
          </MDBMask>
        </MDBView>


      </div>
    );
  }


export default About;