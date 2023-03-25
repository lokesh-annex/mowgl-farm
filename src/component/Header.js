import React, { useState,useEffect } from 'react';
import Logo from "./images/logo.svg";
import MenuOneIcon from "./images/menu-1.svg";
import MenuTwoIcon from "./images/menu-2.svg";
import MenuThreeIcon from "./images/menu-3.svg";
import MenuFourIcon from "./images/menu-4.svg";
import MenuFiveIcon from "./images/menu-5.svg";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import {Link } from "react-scroll";

function Header() {
  const [scroll, setScroll] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 50);
        });
    }, []);
  const renderTooltip = (props) => (
    <Tooltip className="button-tooltip" id="button-tooltip" {...props}>
     1234-567-8899
    </Tooltip>
  );
  return (
    <>
      <div  className={scroll?"header fixed section_one bg-one":"header section_one bg-one"}>
        <div className="container">
          <div className="header white_header">
            <div className="row">
              
              <div className="col-lg-3 col-md-7 col-sm-7 col-7 align-self-center">
                <div className="logo">
                  <img className="img-fluid" src={Logo} />
                </div>
              </div>
              <div className="col-lg-9 col-md-5 col-sm-5 col-5 align-self-center">
                <div className="active-class nav-menu">
                  <ul>
                    <li>
                    <Link href='' to="Home" spy={true} smooth={true} duration={500} > 
                        <span className="menu-icon">
                          <img className="img-fluid" src={MenuOneIcon} />
                        </span>
                        PRODUCTS
                        </Link>
                    </li>
                    <li>
                    <Link href='' to="WhyChooseUs" spy={true} smooth={true} duration={500} > 
                        <span className="menu-icon">
                          <img className="img-fluid" src={MenuTwoIcon} />
                        </span>
                        WHY US
                        </Link>
                    </li>
                    <li>
                    <a href='tel:+12345678899'>
                        <span className="menu-icon">
                          <img className="img-fluid" src={MenuThreeIcon} />
                        </span>
                        <OverlayTrigger
                          placement="bottom"
                          delay={{ show: 250, hide: 2000 }}
                          overlay={renderTooltip}
                        >
                          <span variant="success">CALL</span>
                        </OverlayTrigger>
                        </a>

                        </li>
                    <li>
                    <Link href='' to="ContactUs" spy={true} smooth={true} duration={500} >
                        <span className="menu-icon">
                          <img className="img-fluid" src={MenuFourIcon} />
                        </span>
                        TRIAL PACK
                        </Link>
                    </li>
                    <li>
                    <Link href='' to="ContactUs" spy={true} smooth={true} duration={500} >
                        <span className="menu-icon">
                          <img className="img-fluid" src={MenuFiveIcon} />
                        </span>
                        REACH US
                        </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
