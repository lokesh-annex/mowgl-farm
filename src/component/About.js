import React, { useState } from "react";
import AbtOne from "./images/ab-1.png";
import AbtTwo from "./images/ab-2.png";
import CowOne from "./images/cow-one.png";

function About() {
  return (
    <>
     <div className="about-us padding-50">
        <div className="cow-image-about">
          <img className="img-fluid" src={CowOne} />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <div className="d-flex align-items-center">
                <div className="line-h mr-20"></div>
                <h2>ABOUT US</h2>
              </div>

              <p className="op-70">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
              <p className="op-70">
                Pellentesque facilisis volutpat dolor sed efficitur. Vivamus
                sollicitudin vitae ipsum sed malesuada. Integer vitae sapien ut
                eros mollis ultrices. Nullam condimentum, nibh et posuere
                cursus.
              </p>
            </div>
            <div className="col-sm-6">
              <div className="about-image">
                <div className="about-image-one">
                  <img className="img-fluid" src={AbtOne} />
                </div>
                <div className="about-image-two">
                  <img className="img-fluid" src={AbtTwo} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
