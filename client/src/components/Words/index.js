import React from "react";
import "./style.css";

function Words() {
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
            <h1 className="moodText1">And Depression</h1>
          </div>
        </section>

        <section className="MoodSectionPic">
          <div className="MoodSecPicContainer">
            <h1 className="mood"></h1>
          </div>
        </section>

        <div className="moodTextDiv">
          <h3 className="feelingDown">Feeling Down Lately?</h3>
          <p className="moodTextp1">
            If you have a mood disorder, your general emotional state or mood is
            distorted or inconsistent with your circumstances and interferes
            with your ability to function. You may be extremely sad, empty or
            irritable (depressed), or you may have periods of depression
            alternating with being excessively happy (mania). Anxiety disorders
            can also affect your mood and often occur along with depression.
            Mood disorders may increase your risk of suicide.
          </p>
        </div>

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

        <div className="moodTextDiv2">
          <p className="moodTextp2">Some examples of mood disorders include:</p>

          <p className="moodText3">
            Major depressive disorder — prolonged and persistent periods of
            extreme sadness <br></br>Bipolar disorder — also called manic
            depression or bipolar affective disorder, depression that includes
            alternating times of depression and mania
            <br></br>
            Seasonal affective disorder (SAD) — a form of depression most often
            associated with fewer hours of daylight in the far northern and
            southern latitudes from late fall to early spring <br></br>
            Cyclothymic disorder — a disorder that causes emotional ups and
            downs that are less extreme than bipolar disorder
            <br></br>
            Premenstrual dysphoric disorder — mood changes and irritability that
            occur during the premenstrual phase of a woman's cycle and go away
            with the onset of menses Persistent depressive disorder (dysthymia)
            — a long-term (chronic) form of depression
            <br></br>
            Disruptive mood dysregulation disorder — a disorder of chronic,
            severe and persistent irritability in children that often includes
            frequent temper outbursts that are inconsistent with the child's
            developmental age <br></br>Depression related to medical illness — a
            persistent depressed mood and a significant loss of pleasure in most
            or all activities that's directly related to the physical effects of
            another medical condition <br></br>Depression induced by substance
            use or medication ― depression symptoms that develop during or soon
            after substance use or withdrawal or after exposure to a medication
          </p>
        </div>

        <div className="moodTextDiv3">
          <h5 className="moodText4">When to see a doctor</h5>

          <p className="moodText5">
            Talk to a health care professional if you: Feel like your emotions
            are interfering with your work, relationships, social activities or
            other parts of your life Have trouble with drinking or drugs Have
            suicidal thoughts or behaviors — seek emergency treatment
            immediately Your mood disorder is unlikely to simply go away on its
            own, and it may get worse over time. Seek professional help before
            your mood disorder becomes severe — it may be easier to treat early
            on.<br></br>If you are thinking about ending your life, or having
            suicidal thoughts due to your circumstances and state of mind,
            chances are you are dealing with really painful emotions. Nobody
            deserves to feel that way and we are so sorry you do. Reach out to a
            therapist who can help you work through and process your emotions in
            a healthy way.
          </p>
        </div>

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
        <footer className="informedFooter">
          <p className="informedFooterText">
            Life Is Now, Copyright &copy; beeherd 2020
          </p>
        </footer>
      </div>
    </div>
  );
}

export default Words;
