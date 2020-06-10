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
} from "mdbreact";

class Home extends Component {
  render() {
    return (
      <div className="container-home">
        <Hero backgroundImage="https://images.pexels.com/photos/775907/pexels-photo-775907.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260">
          <MDBContainer>
            <MDBCarousel activeItem={1} length={3} slide={true} showControls={true} showIndicators={true} multiItem>
              <MDBCarouselInner>
                <MDBRow>
                  <MDBCarouselItem itemId="1">
                    <MDBCol md="12">
                      <MDBCard className="mb-3">
                        <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Avatars/avatar-1.jpg" />
                        <MDBCardBody>
                          <div className="card-title">Placeholder Title 1</div>
                          <div className="card-content">Placeholder Description 1</div>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBCol>
                  </MDBCarouselItem>
                  <MDBCarouselItem itemId="2">
                    <MDBCol md="12">
                      <MDBCard className="mb-3">
                        <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Avatars/avatar-1.jpg" />
                        <MDBCardBody>
                          <div className="card-title">Placeholder Title 2</div>
                          <div className="card-content">Placeholder Description 2</div>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBCol>
                  </MDBCarouselItem>
                  <MDBCarouselItem itemId="3">
                    <MDBCol md="12">
                      <MDBCard className="mb-3">
                        <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Avatars/avatar-1.jpg" />
                        <MDBCardBody>
                          <div className="card-title">Placeholder Title 3</div>
                          <div className="card-content">Placeholder Description 3</div>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBCol>
                  </MDBCarouselItem>
                </MDBRow>
              </MDBCarouselInner>
            </MDBCarousel>
          </MDBContainer>
        </Hero>
        <MDBContainer>
          <MDBRow>
            <MDBCol size="12">
              <MDBRow>
                <MDBCol size="3">
                  <MDBCard narrow className="category-card">
                    <h10 className="category-title"> Addiction </h10>
                  </MDBCard>
                </MDBCol>
                <MDBCol size="3">
                  <MDBCard narrow className="category-card">
                    <h10 className="category-title"> Mood Disorders </h10>
                  </MDBCard>
                </MDBCol>
                <MDBCol size="3" className="category-card">
                  <MDBCard narrow>
                    <h10 className="category-title"> Suicidal Thoughts </h10>
                  </MDBCard>
                </MDBCol>
                <MDBCol size="3" className="category-card">
                  <MDBCard narrow>
                    <h10 className="category-title"> Resources </h10>
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
