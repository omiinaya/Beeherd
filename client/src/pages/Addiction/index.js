import React from 'react'
import "./style.css";
import Words from '../../components/Words';
import "../../components/Words/style.css";
//import InfoCards from '../../components/InfoCards';

function Addiction() {
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
              <h1 className="moodColors">Addiction & Substance Abuse</h1>
            </div>
            <h1 className="moodText1">And Addiction</h1>
          </div>
        </section>

        <section className="MoodSectionPic">
          <div className="MoodSecPicContainer"></div>
        </section>
        <center>
          <div className="moodTextDiv">
            <h1 className="mooddown"></h1>

            <div className="borderDown">
              <h1 className="mooddown2">:: freedom ::</h1>
            </div>
          </div>
          <h3 className="mooddown"></h3>
        </center>
        <section className="MoodSectionPic">
          <div className="MoodSecPicContainer"></div>
        </section>
        <p className="moodTextp1">
        There is evidence that addictive behaviors share key neurobiological features: 
        They intensely involve brain pathways of reward and reinforcement, 
        which involve the neurotransmitter dopamine. And, in keeping with other highly 
        motivated states, they lead to the pruning of synapses in the prefrontal cortex,
         home of the brain's highest functions, so that attention is highly focused on 
         cues related to the target substance or activity. It is important to know that 
         such brain changes are reversible after the substance use or behavior is discontinued.
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

        <div className="moodTextDiv2">
          <p className="moodTextp2">What</p><p className= "moodTextp22">Do we Know?</p>
          <ul className="Moodul">
            <li className="Moodli">
            Both substance use disorders and gambling behaviors have an increased likelihood of being accompanied by mental health conditions such as depression and anxiety, or other pre-existing problems. Substance use and gambling disorders not only engage the same brain mechanisms, they respond to many of the same treatment approaches.
            </li>
            <li className="Moodli">
            Another distinguishing feature of addictions is that individuals continue to pursue the activity despite the physical or psychological harm it incurs, even if it the harm is exacerbated by repeated use. Typically, one's tolerance to a substance increases as the body adapts to its presence.
            </li>

            <li className="Moodli">
            Because addiction affects the brain’s executive functions, centered in the prefrontal cortex, individuals who develop an addiction may not be aware that their behavior is causing problems for themselves and others. Over time, pursuit of the pleasurable effects of the substance or behavior may dominate an individual’s activities.
            </li>

            <li className="Moodli">
            All addictions have the capacity to induce a sense of hopelessness and feelings of failure, as well as shame and guilt, but research documents that recovery is the rule rather than the exception. 
            </li>
            <li className="Moodli">
            There are many routes to recovery. Individuals can achieve improved physical, psychological, and social functioning on their own—so-called natural recovery. Others benefit from the support of community or peer-based networks. And still others opt for clinical-based recovery through the services of credentialed professionals.
            </li>
            <li className="Moodli">
            Some characteristics, such as a lack of ability to tolerate distress or other strong feelings, have been associated with addiction, but there is no one “addictive personality” type that clearly predicts whether a person will face problems with addiction.
            </li>
            <a className="text-support" href="https://www.psychologytoday.com/us/basics/addiction">
              :: Learn More ::
            </a>
          </ul>
        </div>
      </div>

      <div className="moodText3div">
        <p className="moodText3"></p>
      </div>

      <div className="moodTextDiv3">
        <p className="moodText5">When to </p><p className="moodText555">SeeK</p><p className="AddiText55">support?</p>
      </div>

      <section className="MoodSection3">
        <div className="MoodSec3container MoodPage">
          <div className="moodBox">
            <p className="moodTextbox">
              If you feel like The substance or activity is used in larger amounts or for a longer period of time than was intended.
There is a desire to cut down on use or unsuccessful efforts to do so. Let us locate support nearby by providing your zipcode above.
            </p>
          </div>
          <div className="moodBox">
            <p className="moodTextbox">
            Use of the substance or activity disrupts obligations at work, school, or home.
              <span className="crisisHotline">
              Use occurs in situations where it is physically risky.
Use continues despite knowing it is causing or exacerbating physical or psychological problems.
            </span>
            </p>
          
          </div>

          <div className="moodBox">
            <p className="moodTextbox">
              If you are thinking about releasing an addictive behaviour or substance and finding freedom again, let us support you.
              Make a poweful choice. Seek professional guidance near you with your zipcode above. You are strong enough.
            </p>
          </div>
        </div>
      </section>
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

export default Addiction;