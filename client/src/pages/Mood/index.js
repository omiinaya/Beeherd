import React from "react";
//import { Link } from "react-router-dom";
import "./style.css";
//import ItsOkto from "../../components/ItsOkTo";
//import InfoCards from "../../components/InfoCards";

function MoodDisorders() {
  return (
    <div className="MoodPageContainer">
      <div className="MoodPage">
        <header className="moodHeader">
          <div className="MHcontainer">
            <h1 className="MHtext1">Let's Talk</h1>
          </div>
        </header>

        <section className="MoodSection1">
          <div className="MoodSec1container">
            <div className="text-container">
              <h1 className="moodColors">Mood Disorders</h1>
            </div>
            <h1 className="moodText1">And Dep-ression</h1>
          </div>
        </section>

        <section className="MoodSectionPic">
          <div className="MoodSecPicContainer"></div>
        </section>
        <center>
          <div className="moodTextDiv">
            <h1 className="mooddown">it's ok to not be ok</h1>

            <div className="borderDown">
              <h1 className="mooddown2">:: down ::</h1>
            </div>
          </div>
          <h3 className="mooddown"> </h3>
        </center>
        <section className="MoodSectionPic">
          <div className="MoodSecPicContainer"></div>
        </section>
        <p className="moodTextp1">
          If you have a mood disorder, your general emotional state or mood is
          distorted or inconsistent with your circumstances and interferes with
          your ability to function. You may be extremely sad, empty or
          irritable, or you may have periods of depression alternating with
          being excessively happy (mania). These may increase your risk of
          suicide. Anxiety disorders can also affect mood and often occur
          alongside depression.
        </p>

        <section className="MoodSection2">
          <div className="MoodSec2container">
            <h1 className="requestSupport">Requesting Support?</h1>
            <p className="locateSupport">
              We Can Locate The Nearest Support Center For You{" "}
            </p>
            <div className="contact-me">
              <div className="informedInputs">
                <input
                  type="text"
                  className="zipcodeInput"
                  placeholder="Enter Your Zipcode"
                ></input>
                <button className="informedButton">
                  <span className="informedSpan">Show Me</span>
                </button>
              </div>
            </div>
          </div>
        </section>
        <div className="MoodcrisisAnimeDiv">
          <div className="MoodcrisisAnime">
            {" "}
            <img
              width="200"
              height="150"
              class="lazy-load"
              alt="Animated gif with Sad then Happy Faces and instructions to text HOME to 741741"
              data-sizes="auto"
              onload="this.parentNode.className += ' img-loaded'"
              src="https://media.giphy.com/media/iG3bIVD6b1tAd8S7Gf/giphy.gif"
              sizes="auto"
            ></img>
          </div>{" "}
        </div>
        <div className="moodTextDiv2">
          <p className="moodTextp2">Which</p>
          <p className="moodTextp22">are they?</p>
          <ul className="Moodul">
            <li className="Moodli">
              Major depressive disorder — prolonged and persistent periods of
              extreme sadness{" "}
            </li>
            <li className="Moodli">
              Bipolar disorder — also called manic depression or bipolar
              affective disorder, depression that includes alternating times of
              depression and mania
            </li>

            <li className="Moodli">
              Cyclothymic disorder — a disorder that causes emotional ups and
              downs that are less extreme than bipolar disorder
            </li>

            <li className="Moodli">
              Seasonal affective disorder (SAD) — a form of depression most
              often associated with fewer hours of daylight in the far northern
              and southern latitudes from late fall to early spring
            </li>
            <li className="Moodli">
              Premenstrual dysphoric disorder — mood changes and irritability
              that occur during the premenstrual phase of a woman's cycle and go
              away with the onset of menses Persistent depressive disorder
              (dysthymia) — a long-term (chronic) form of depression
            </li>
            <li className="Moodli">
              Disruptive mood dysregation disorder — a disorder of chronic,
              severe and persistent irritability in children that often includes
              frequent temper outbursts that are inconsistent with the child's
              developmental age
            </li>

            <li className="Moodli">
              Depression related to medical illness — a persistent depressed
              mood and a significant loss of pleasure in most or all activities
              that's directly related to the physical effects of another medical
              condition
            </li>

            <li className="Moodli">
              Depression induced by substance use or medication ― depression
              symptoms that develop during or soon after substance use or
              withdrawal or after exposure to a medication
            </li>
            <span>
              <a
                className="text-support"
                href="https://nami.org/About-Mental-Illness"
              >
                ::learn more::
              </a>
            </span>
          </ul>
        </div>
      </div>

      <div className="MoodcrisisAnimeDiv">
        <div className="MoodcrisisAnime1">
          {" "}
          <img
            width="200"
            height="150"
            class="lazy-load"
            alt="Animated gif with Sad then Happy Faces and instructions to text HOME to 741741"
            data-sizes="auto"
            onload="this.parentNode.className += ' img-loaded'"
            src="https://media.giphy.com/media/Quz33gDGvspqJLi6DL/giphy.gif"
            sizes="auto"
          ></img>
        </div>
      </div>

      <div className="moodText3div">
        <p className="moodText3"></p>
      </div>

      <div className="moodTextDiv3">
        <p className="moodText5">When to </p>
        <p className="moodText555">SeeK</p>
        <p className="moodText55">a pro?</p>
      </div>

      <section className="MoodSection3">
        <div className="LifeSec3container MoodPage">
          <div className="moodBox">
            <p className="moodTextbox">
              If you feel like your emotions are interfering with your work,
              relationships, social activities, or other parts of your life.
              Have trouble with drinking or drugs or have suicidal thoughts
              and/or behaviors. Let us locate support nearby by providing your
              zipcode above.
            </p>
          </div>
          <div className="moodBox">
            <p className="moodTextbox">
              Reach out to a professional -- Text to talk -- Completely
              Confidential
              <span className="crisisHotline">
                Text HOME to 741741 to connect with a Crisis Counselor Free 24/7
                support at your fingertips US and Canada: text 741741 UK: text
                85258 | Ireland: text 086 1800 280
              </span>
            </p>
            <span className="crisisHotline">
              Text HOME to 741741 to connect with a Crisis Counselor Free 24/7
              support at your fingertips US and Canada: text 741741 UK: text
              85258 | Ireland: text 086 1800 280
            </span>
          </div>

          <div className="moodBox">
            <p className="moodTextbox">
              If you are thinking about ending your life due to your
              circumstances and state of mind, chances are you are dealing with
              really painful emotions. Nobody deserves to feel that way and we
              are so sorry you do. We're here to help. You are not alone.
            </p>
          </div>
        </div>
      </section>

      <div className="MoodcrisisAnimefoot">
        <div className="MoodcrisisAnimefoot">
          {" "}
          <img
            width="200"
            height="150"
            class="lazy-load"
            alt="Animated gif with Sad then Happy Faces and instructions to text HOME to 741741"
            data-sizes="auto"
            onload="this.parentNode.className += ' img-loaded'"
            src="https://i.pinimg.com/originals/77/19/cf/7719cf491fb46a1e4b6409caca84918e.gif"
            sizes="auto"
          ></img>
        </div>
      </div>

      <section className="Informedfoot">
        <footer className="informedFooter">
          <p className="informedFooterText">
            Life Is Now, Copyright &copy; beeherd 2020
          </p>
        </footer>
      </section>
    </div>
  );
}

export default MoodDisorders;
