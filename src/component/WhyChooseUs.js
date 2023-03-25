import React, { useState } from "react";
import CowHed from "./images/cow-sec.svg";
import GheeJar from "./images/ghee-jar.png";
import Check from "./images/check.svg";

function WhyChooseUs() {
  return (
    <>
     <div id="WhyChooseUs" className="why-choose-us padding-30">
        <div className="container">
          <div className="row">
            <div className="heading-sec text-center">
              <div className="cow-hed">
                <img className="img-fluid" src={CowHed} />
              </div>
              <div className="d-flex align-items-center text-center justify-content-center">
                <div className="line-h mr-20"></div>
                <h2>A2 MOWGLI FARM</h2> <div className="line-h ml-20"></div>
              </div>
              <div className="heading--bottom">WHY CHOOSE US </div>
            </div>
            <div className="why-choose-us-main">
              <div className="why-choose-us-box">
                <div className="check-icon">
                  <img className="img-fluid" src={Check} />
                </div>
                Toxin-Free
              </div>
              <div className="why-choose-us-box sec">
                <div className="check-icon">
                  <img className="img-fluid" src={Check} />
                </div>
                Handmade
              </div>
              <div className="why-choose-us-box third">
                <div className="check-icon">
                  <img className="img-fluid" src={Check} />
                </div>
                A2 cows milk
              </div>
              <div className="why-choose-us-box four">
                <div className="check-icon">
                  <img className="img-fluid" src={Check} />
                </div>
                Cow dung fire
              </div>
              <div className="why-choose-us-box five">
                <div className="check-icon">
                  <img className="img-fluid" src={Check} />
                </div>
                Non-GMO
              </div>
              <div className="why-choose-us-box six">
                <div className="check-icon">
                  <img className="img-fluid" src={Check} />
                </div>
                Organic Grass-Fed
              </div>
              <div className="why-choose-us-box seven">
                <div className="check-icon">
                  <img className="img-fluid" src={Check} />
                </div>
                Single curd culture
              </div>
            </div>
            <div className="ghee-jar-sec">
              <img className="img-fluid" src={GheeJar} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WhyChooseUs;
