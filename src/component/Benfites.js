import React, { useState } from "react";
import BenfitesOne from "./images/b-1.svg";
import BoxSet from "./images/box-set.png";
import BorderLine from "./images/border-ben.svg";
import CowHed from "./images/cow-sec.svg";
import {AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";
function Benfites() {
  return (
    <>
    <div className="benfites">
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
              <div className="heading--bottom">GHEEE BENFITES </div>
            </div>
            <div className="benfites-main-sec">
              <div className="border-ben">
                <img className="img-fluid" src={BorderLine} />
              </div>
              <AnimationOnScroll duration="1" animateIn="animate__bounceIn">
              <div className="benfites-main first">
                <div className="benfites-box">
                  <img className="img-fluid" src={BenfitesOne} />
                </div>
                <div className="benfites-text">Great for a healthy diet</div>
              </div>
              </AnimationOnScroll>
              <AnimationOnScroll duration="1.2" animateIn="animate__bounceIn">
              <div className="benfites-main sec">
                <div className="benfites-box">
                  <img className="img-fluid" src={BenfitesOne} />
                </div>
                <div className="benfites-text">Great for a healthy diet 1</div>
              </div>
              </AnimationOnScroll>
              <AnimationOnScroll duration="1.4" animateIn="animate__bounceIn">
              <div className="benfites-main third">
                <div className="benfites-box">
                  <img className="img-fluid" src={BenfitesOne} />
                </div>
                <div className="benfites-text">Great for a healthy diet</div>
              </div>
              </AnimationOnScroll>
              <AnimationOnScroll duration="1.6" animateIn="animate__bounceIn">
              <div className="benfites-main four">
                <div className="benfites-box">
                  <img className="img-fluid" src={BenfitesOne} />
                </div>
                <div className="benfites-text">Great for a healthy diet</div>
              </div>
              </AnimationOnScroll>
              <AnimationOnScroll duration="1.8" animateIn="animate__bounceIn">
              <div className="benfites-main five">
                <div className="benfites-box">
                  <img className="img-fluid" src={BenfitesOne} />
                </div>
                <div className="benfites-text">Great for a healthy diet</div>
              </div>
              </AnimationOnScroll>
              <AnimationOnScroll duration="2" animateIn="animate__bounceIn">
              <div className="benfites-main six">
                <div className="benfites-box">
                  <img className="img-fluid" src={BenfitesOne} />
                </div>
                <div className="benfites-text">Great for a healthy diet</div>
              </div>
              </AnimationOnScroll>
              <div className="img-set-box">
                <img className="img-fluid" src={BoxSet} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Benfites;
