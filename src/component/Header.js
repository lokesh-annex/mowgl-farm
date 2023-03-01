import React, { useState } from "react";
import Logo from "./images/logo.svg";
import MenuOneIcon from "./images/menu-1.svg";
import MenuTwoIcon from "./images/menu-2.svg";
import MenuThreeIcon from "./images/menu-3.svg";
import MenuFourIcon from "./images/menu-4.svg";
import MenuFiveIcon from "./images/menu-5.svg";

import Topslide from "./TopSlide";
import About from "./About";
import Benfites from "./Benfites";
import WhyChooseUs from "./WhyChooseUs";
import Process from "./Process";
import ContactUs from "./ContactUs";
import Footer from "./Footer";

import { NavLink } from "react-router-dom";

function Header() {
  const [toggle, setToggle] = useState(false);
  function toggleButton() {
    if (toggle) {
    }
    setToggle(!toggle);
  }
  return (
    <>
      <div className="section_one bg-one">
        <div className="container">
          <div className="header white_header">
            <div className="row">
              <div className="col-lg-3 col-md-7 col-sm-7 col-7 align-self-center">
                <div className="logo">
                  <img className="img-fluid" src={Logo} />
                </div>
              </div>
              <div className="col-lg-9 col-md-5 col-sm-5 col-5 align-self-center">
                <div className={toggle ? "active-class nav-menu" : "nav-menu"}>
                  <ul>
                    <li>
                      <a exact to="/">
                        <span className="menu-icon">
                          <img className="img-fluid" src={MenuOneIcon} />
                        </span>
                        PRODUCTS
                      </a>
                    </li>
                    <li>
                      <a to="/adani">
                        <span className="menu-icon">
                          <img className="img-fluid" src={MenuTwoIcon} />
                        </span>
                        WHY US
                      </a>
                    </li>
                    <li>
                      <a to="/trina">
                        <span className="menu-icon">
                          <img className="img-fluid" src={MenuThreeIcon} />
                        </span>
                        CALL
                      </a>
                    </li>
                    <li>
                      <a to="/havells">
                        <span className="menu-icon">
                          <img className="img-fluid" src={MenuFourIcon} />
                        </span>
                        TRIAL PACK
                      </a>
                    </li>
                    <li>
                      <a to="/contact">
                        <span className="menu-icon">
                          <img className="img-fluid" src={MenuFiveIcon} />
                        </span>
                        REACH US
                      </a>
                    </li>
                  </ul>
                  <div className="toggle-icon" onClick={toggleButton}>
                    <div className="menu_bar">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Topslide />
      <About />
      <Benfites />
      <WhyChooseUs />
      <Process />
      <ContactUs />
      <Footer />
    </>
  );
}

export default Header;
