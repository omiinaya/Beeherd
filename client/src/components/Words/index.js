import React from "react";
import "./style.css";

function Words() {
  return (
    <div className="MoodPageContainer">
      <header className="moodHeader">
        <div className="MHcontainer">
          <h1 className="MHtext1">Let's Talk</h1>
        </div>
      </header>

      <section className="MoodSection1">
        <div className="MoodSec1container">
          <h1 className="moodText1">text here</h1>
          <p className="moodText2">and here some more</p>
        </div>
      </section>

      <section className="MoodSection1">
        <div className="MoodSec2container">
          <h1 className="requestSupport">Requesting Support?</h1>
          <p className="locateSupport">
            We Can Locate The Nearest Support Center For You{" "}
          </p>
          <div className=" MoodInput input-group mb-3">
            <input
              type="text"
              className="supportInput form-control"
              placeholder="Enter Your Zipcode"
              aria-label="Requesting Support?"
              aria-describedby="button-addon2"
            />
            <div className="moodINPUT input-group-append">
              <button
                className=" locateBTN btn btn-outline-secondary"
                type="button"
                id="button-addon2"
              >
                Show Me
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="MoodSection3">
        <div className="MoodSec3container">
          <div className="moodBox1">
            <p className="moodText2">and here some more </p>
          </div>
          <div className="moodBox2">
            <p className="moodText2">and here some more </p>
          </div>
          <div className="moodBox3">
            <p className="moodText2">and here some more </p>
          </div>
        </div>
      </section>
      <footer className="informedFooter"><p className="informedFooterText">Life Is Now, Copyright &copy; beeherd 2020</p></footer>
    </div>
  );
}

export default Words;
