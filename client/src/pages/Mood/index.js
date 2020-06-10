import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import ItsOkto from "../../components/ItsOkTo";


function MoodDisorders() {
    return (
      <div className="about">
      <div class="container-fluid">
      <h2 class= "talk-mood font-weight-light">
              Let's Talk
            </h2>
        <div className="text-container">
          <h1>Mood Disorders</h1>
          <div class="col-lg-10">
            <h2 class="font-weight-light">
              And Depression
            </h2>
            <a className="text-support" href=""></a>
            <div class="col-lg-7">
              <img
                class="img-fluid rounded mb-4 mb-lg-0"
                src="https://th.bing.com/th/id/OIP.XjBEulStIJnFBt8qotpHUgHaEb?pid=Api&rs=1"
                alt=""
              />
            </div>
            <div>
              <h3>Feeling Down Lately?</h3>
              <p>
                {" "}
                If you have a mood disorder, your general emotional state or
                mood is distorted or inconsistent with your circumstances and
                interferes with your ability to function. You may be extremely
                sad, empty or irritable (depressed), or you may have periods of
                depression alternating with being excessively happy (mania).
                Anxiety disorders can also affect your mood and often occur
                along with depression. Mood disorders may increase your risk of
                suicide.
                <br></br>
                Some examples of mood disorders include:
                <br></br>
                Major depressive disorder — prolonged and persistent periods of
                extreme sadness Bipolar disorder — also called manic depression
                or bipolar affective disorder, depression that includes
                alternating times of depression and mania Seasonal affective
                disorder (SAD) — a form of depression most often associated with
                fewer hours of daylight in the far northern and southern
                latitudes from late fall to early spring Cyclothymic disorder —
                a disorder that causes emotional ups and downs that are less
                extreme than bipolar disorder Premenstrual dysphoric disorder —
                mood changes and irritability that occur during the premenstrual
                phase of a woman's cycle and go away with the onset of menses
                Persistent depressive disorder (dysthymia) — a long-term
                (chronic) form of depression Disruptive mood dysregulation
                disorder — a disorder of chronic, severe and persistent
                irritability in children that often includes frequent temper
                outbursts that are inconsistent with the child's developmental
                age Depression related to medical illness — a persistent
                depressed mood and a significant loss of pleasure in most or all
                activities that's directly related to the physical effects of
                another medical condition Depression induced by substance use or
                medication ― depression symptoms that develop during or soon
                after substance use or withdrawal or after exposure to a
                medication
              </p>
              <h5>When to see a doctor</h5>

              <p>
                If you're concerned that you may have a mood disorder, make an
                appointment to see your doctor or a mental health professional
                as soon as you can. If you're reluctant to seek treatment, talk
                to a friend or loved one, a faith leader, or someone else you
                trust. Talk to a health care professional if you: Feel like your
                emotions are interfering with your work, relationships, social
                activities or other parts of your life Have trouble with
                drinking or drugs Have suicidal thoughts or behaviors — seek
                emergency treatment immediately Your mood disorder is unlikely
                to simply go away on its own, and it may get worse over time.
                Seek professional help before your mood disorder becomes severe
                — it may be easier to treat early on.
                <br></br>
                But, hold up. Before we get to saving the world, let’s check-in.
                If you’re feeling like ending your life, you can always ask for
                help managing your emotions. Asking for help is brave. You are
                brave. You are valuable You are important. And, the world needs
                you.
                <br></br>Distract yourself. Find even one thing that brings you
                joy. And, hold onto it. Maybe it’s listening to your favorite
                song (listening to music is one of the most common coping tools
                for our texters), or maybe it’s looking into the eyes of your
                adorable pup. Whatever it may be, find one thing to turn to when
                you feel in the darkest of places.
                <br></br>Talk to a pro. If you are thinking about ending your
                life, or having suicidal thoughts due to your circumstances and
                state of mind, chances are you are dealing with really painful
                emotions. Nobody deserves to feel that way and we are so sorry
                you do. Reach out to a therapist who can help you work through
                and process your emotions in a healthy way.
                <br></br>Go somewhere safe. If you feel like you are a danger to
                yourself, it’s always okay (brave, even!) to call 911 or go to
                an ER.
              </p>
              <h3>
                NAMI Helpline 1-800-950-6264<br></br>You're not alone.
                Confidential help is available for free.
              </h3>

              <div className="container-hotline1">
                Text HOME to 741741 to connect with a Crisis Counselor
                <br></br>
                Free 24/7 support at your fingertips
                <br></br>
                US and Canada: text 741741
                <br></br>
                UK: text 85258 | Ireland: text 086 1800 280
              </div>
              <h6>Requesting Support?</h6>
              <h7>We Can Locate The Nearest Support Center For You</h7>
              <div class="input-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter your Zipcode"
                  aria-label="Requesting Support?"
                  aria-describedby="button-addon2"
                />
                <div class="input-group-append">
                  <button
                    class="btn btn-outline-secondary"
                    type="button"
                    id="button-addon2"
                  >
                    Help
                  </button>
                </div>
              </div>
              <div class="col-lg-5">
                <img
                  class="img-fluid rounded mb-6 mb-lg-0"
                  src="https://www.bing.com/th?id=Ar67DWRf8MkTMQQ1808x1150&w=470&h=298&c=7&rs=1&qlt=80&cdv=1&dpr=2&pid=16.1"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    );  
   }
              
export default MoodDisorders;