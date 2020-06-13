import React, { Component } from "react";
import "./style.css";

function Suicide() {
  return (
    <div className="containChooseLife">
      <div className="container-fluid">
        <div classname="uMatterDiv">
          <h1 className="neon" data-text="[You Matter]">
            [You_Matter]
          </h1>
          <div className="col-lg-10">
            <h2 className="heading-suicide font-weight-light">
              It's OK to Talk About Suicide
            </h2>
            <a className="text-support" href="https://www.crisistextline.org">
              -Text to Talk-
            </a>
            <div className="col-lg-7">
              <img
                className="suicide-hotline img-fluid rounded mb-4 mb-lg-0"
                src="https://media.clickorlando.com/photo/2019/03/13/suicidehotlineweb_1552496394301_21530477_ver1.0_1280_720.jpg"
                alt=""
              />
            </div>
            <div classname="chooseLifeText">
              <h3 classname="CLtext1">Having Suicidal Thoughts?</h3>
              <p className="CLtext2">
                You are enough. You matter. Your life is worth fighting for.
                Suicide is a leading cause of death. It’s also preventable. In
                U.S. alone, we have the ability to save nearly 45,000 lives
                every year. Suicide is a leading cause of death. It’s also
                preventable. In U.S. alone, we have the ability to save nearly
                45,000 lives every year. Globally, that number is closer to
                800,000. But, hold up. Before we get to saving the world, let’s
                check-in. If you’re feeling like ending your life, you can
                always ask for help managing your emotions. Asking for help is
                brave. You are brave. You are valuable You are important. And,
                the world needs you.
              </p>
              <h5 className="CLtext3">
                How to Get Help If You’re Thinking About Ending Your Life
              </h5>
              <p className="CLtext4">
                Here are a few ways to get through the next second, minute,
                hour, and even a whole day.
              </p>{" "}
              <p className="CLtext5">
                Text us. We’re excellent listeners if we do say so ourselves.
                And, we’re here for you—always. Text HOME to 741741 to connect
                with a real human. No judgment—just straight-up listening.
              </p>
              <p className="CLtext6">
                Tell a friend. No matter how alone you feel, know that there are
                so many people in this world who not only want you in this
                world. And, they want to help you (Hi—have you met us? We’re
                included in this group! See above). Confiding in someone can
                help you build a support system for times when you are feeling
                in a really dark place. Nervous about reaching out? Start with a
                text message like this: “Hey there. I’m feeling really alone
                right now. Would you mind keeping me company?”
              </p>
              <br></br>{" "}
              <p className="CLtext7">
                Distract yourself. Find even one thing that brings you joy. And,
                hold onto it. Maybe it’s listening to your favorite song
                (listening to music is one of the most common coping tools for
                our texters), or maybe it’s looking into the eyes of your
                adorable pup. Whatever it may be, find one thing to turn to when
                you feel in the darkest of places.
              </p>
              <br></br>
              <p className="CLtext8">
                Talk to a pro. If you are thinking about ending your life,
                chances are you are dealing with really painful emotions. Nobody
                deserves to feel that way and we are so sorry you do. Reach out
                to a therapist who can help you work through and process your
                emotions in a healthy way.
              </p>
              <br></br>
              <p className="CLtext5">
                Go somewhere safe. If you feel like you are a danger to
                yourself, it’s always okay (brave, even!) to call 911 or go to
                an ER.
              </p>
            </div>
            <div className="container-hotline1">
              Text HOME to 741741 to connect with a Crisis Counselor
              <br></br>
              Free 24/7 support at your fingertips
              <br></br>
              US and Canada: text 741741
              <br></br>
              UK: text 85258 | Ireland: text 086 1800 280
            </div>
            <div className="locateUserDiv">
              <h6 className="requestSupport">Requesting Support?</h6>
              <h7 className="locateSupport">
                We Can Locate The Nearest Support Center For You
              </h7>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Suicide;
