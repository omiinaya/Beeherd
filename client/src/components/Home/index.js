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
  MDBBtn,
  MDBIcon,
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
        <MDBContainer>
          <MDBRow>
            <MDBCol size="12">
              <MDBRow>
                <MDBCol size="3">
                  <MDBCard narrow>
                    <MDBCardImage
                      className="view view-cascade gradient-card-header purple-gradient"
                      cascade
                      tag="div"
                    >
                      <h2 className="h2-cards">Mattonit</h2>
                      <p>The Boar</p>

                    </MDBCardImage>
                    <MDBCardBody cascade className="text-center">
                      <MDBCardText>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Voluptatibus, ex, recusandae. Facere modi sunt,
                        quod quibusdam dignissimos neque rem nihil ratione est
                        placeat vel, natus non quos laudantium veritatis
                        sequi.Ut enim ad minima veniam, quis nostrum
                        exercitationem ullam corporis suscipit laboriosam, nisi
                        ut aliquid ex ea commodi.
                      </MDBCardText>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
                <MDBCol size="3">
                <MDBCard narrow>
                    <MDBCardImage
                      className="view view-cascade gradient-card-header purple-gradient"
                      cascade
                      tag="div"
                    >
                      <h2 className="h2-cards">Mattonit</h2>
                      <p>The Boar</p>

                    </MDBCardImage>
                    <MDBCardBody cascade className="text-center">
                      <MDBCardText>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Voluptatibus, ex, recusandae. Facere modi sunt,
                        quod quibusdam dignissimos neque rem nihil ratione est
                        placeat vel, natus non quos laudantium veritatis
                        sequi.Ut enim ad minima veniam, quis nostrum
                        exercitationem ullam corporis suscipit laboriosam, nisi
                        ut aliquid ex ea commodi.
                      </MDBCardText>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
                <MDBCol size="3">
                <MDBCard narrow>
                    <MDBCardImage
                      className="view view-cascade gradient-card-header purple-gradient"
                      cascade
                      tag="div"
                    >
                      <h2 className="h2-cards">Mattonit</h2>
                      <p>The Boar</p>

                    </MDBCardImage>
                    <MDBCardBody cascade className="text-center">
                      <MDBCardText>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Voluptatibus, ex, recusandae. Facere modi sunt,
                        quod quibusdam dignissimos neque rem nihil ratione est
                        placeat vel, natus non quos laudantium veritatis
                        sequi.Ut enim ad minima veniam, quis nostrum
                        exercitationem ullam corporis suscipit laboriosam, nisi
                        ut aliquid ex ea commodi.
                      </MDBCardText>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
                <MDBCol size="3">
                <MDBCard narrow>
                    <MDBCardImage
                      className="view view-cascade gradient-card-header purple-gradient"
                      cascade
                      tag="div"
                    >
                      <h2 className="h2-cards">Mattonit</h2>
                      <p>The Boar</p>

                    </MDBCardImage>
                    <MDBCardBody cascade className="text-center">
                      <MDBCardText>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Voluptatibus, ex, recusandae. Facere modi sunt,
                        quod quibusdam dignissimos neque rem nihil ratione est
                        placeat vel, natus non quos laudantium veritatis
                        sequi.Ut enim ad minima veniam, quis nostrum
                        exercitationem ullam corporis suscipit laboriosam, nisi
                        ut aliquid ex ea commodi.
                      </MDBCardText>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}

export default Home;
