import React, { useState } from "react";
import SlideRight from "./images/slider-right.png";
import Cow from "./images/cow-s.svg";
import BottomBg from "./images/bot-line.svg";

function Slide() {
  return (
    <>
      <div className="top-slide bg-one">
        <div className="container">
          <div className="row">
            <div className="col-sm-5">
              <div className="uper-slide-heading">FRESH Mowgli farm GHEE</div>
              <h1>Pure Desi Ghee That Maintains A Perfect</h1>
              <p>
                Welcome to the Mowli Farm! We supply farm fresh A2 milk right at
                your doorstep. Everyday we supply FRESH milk that is 100% pure
                and unadulterated, giving you the best milk has to offer.
              </p>
              <div className="cow-image">
                <img className="img-fluid" src={Cow} />
              </div>
            </div>
            <div className="col-sm-7">
              <div className="slide-image">
                <img className="img-fluid" src={SlideRight} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-bg">
        <img className="img-fluid" src={BottomBg} />
      </div>
    </>
  );
}

export default Slide;
