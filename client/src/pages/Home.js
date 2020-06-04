import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage,
  MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn } from "mdbreact";
import "./Home.css"
  
function Home() {
  return (
    <div className="homeContainer">
      <Hero backgroundImage="https://images.unsplash.com/photo-1549814892-f6a520afc97d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60">
        <h1>beeherd</h1>
        <h2>Leave your troubles here</h2>
        
                <a href="/resources" className="btn btn-primary">
                  Get Informed
                </a>
      </Hero>
      <div>
      <p><b>
      We aim to be the friendliest forum for support with mental health issues.
      </b></p>

      <p>On the beeheard Forum you can share experiences, ask questions or vent your emotions with people who know what’s it’s like to experience mental health difficulties and everything that goes alongside them.</p>
      </div>
      
      <MDBContainer>
      <MDBCarousel activeItem={1} length={3} slide={true} showControls={true} showIndicators={true} multiItem>
        <MDBCarouselInner>
          <MDBRow>
            <MDBCarouselItem itemId="1">
              <MDBCol md="4">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Avatars/avatar-1.jpg" />
                  <MDBCardBody>
                    <MDBCardTitle>beeheard</MDBCardTitle>
                    <MDBCardText>
                    I just hope you are willing to put in a little bit of effort into our conversation. If you think it isn’t working out, just tell me! After all you can’t get along with every damn person. Also I’d appreciate it if you were a little closer to my age.
                    </MDBCardText>            
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol md="4">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Avatars/avatar-10.jpg" />
                  <MDBCardBody>
                    <MDBCardTitle>beeheard</MDBCardTitle>
                    <MDBCardText>
                    I just hope you are willing to put in a little bit of effort into our conversation. If you think it isn’t working out, just tell me! After all you can’t get along with every damn person. Also I’d appreciate it if you were a little closer to my age.
                    </MDBCardText>       
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol md="4">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Avatars/avatar-13.jpg" />
                  <MDBCardBody>
                    <MDBCardTitle>beeheard</MDBCardTitle>
                    <MDBCardText>
                    I just hope you are willing to put in a little bit of effort into our conversation. If you think it isn’t working out, just tell me! After all you can’t get along with every damn person. Also I’d appreciate it if you were a little closer to my age.
                    </MDBCardText>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="2">
              <MDBCol md="4">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Avatars/avatar-4.jpg" />
                  <MDBCardBody>
                    <MDBCardTitle>beeheard</MDBCardTitle>
                    <MDBCardText>
                    I really want to blow my brains out right now. I stayed friends with my caretaker after she quit her job and she just ended our friendship while blaming it on the power differential, while she always talked openly with me about all her problems.
                    </MDBCardText>
                    
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol md="4">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Avatars/avatar-5.jpg" />
                  <MDBCardBody>
                    <MDBCardTitle>beeheard</MDBCardTitle>
                    <MDBCardText>
                    I really want to blow my brains out right now. I stayed friends with my caretaker after she quit her job and she just ended our friendship while blaming it on the power differential, while she always talked openly with me about all her problems.
                    </MDBCardText>
                    
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol md="4">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Avatars/avatar-6.jpg" />
                  <MDBCardBody>
                    <MDBCardTitle>beeheard</MDBCardTitle>
                    <MDBCardText>
                    I really want to blow my brains out right now. I stayed friends with my caretaker after she quit her job and she just ended our friendship while blaming it on the power differential, while she always talked openly with me about all her problems.
                    </MDBCardText>
                    
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="3">
              <MDBCol md="4">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Avatars/avatar-7.jpg" />
                  <MDBCardBody>
                    <MDBCardTitle>beeheard</MDBCardTitle>
                    <MDBCardText>
                    Man this sucks been feeling alright recently and today just kinda crashed. Depression can suck my left
                    </MDBCardText>
                    
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol md="4">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Avatars/avatar-8.jpg" />
                  <MDBCardBody>
                    <MDBCardTitle>beeheard</MDBCardTitle>
                    <MDBCardText>
                    Man this sucks been feeling alright recently and today just kinda crashed. Depression can suck my left
                    </MDBCardText>
                    
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
              <MDBCol md="4">
                <MDBCard className="mb-2">
                  <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Avatars/avatar-9.jpg" />
                  <MDBCardBody>
                    <MDBCardTitle>beeheard</MDBCardTitle>
                    <MDBCardText>
                    Man this sucks been feeling alright recently and today just kinda crashed. Depression can suck my left
                    </MDBCardText>
                    
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBCarouselItem>
          </MDBRow>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
    </div>
  );
}

export default Home;
