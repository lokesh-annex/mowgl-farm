import React, { useState } from "react";
import Contact from "./images/contact-us.svg";
import ContactFrom from "./ContactFrom";

function ContactUs() {
  return (
    <>
      <div id="ContactUs" className="contact-us padding-100">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <div className="contact-us-heading">
                <h2>Get the direction</h2>
                <div className="line-h mr-20"></div>
              </div>
              <img className="img-fluid " src={Contact} />
            </div>
            <div className="col-sm-6">
              <div className="contact-us-from">
                <div className="address-section">
                  <ul>
                    <li className="d-flex">
                      <div className="address-icon">
                        <svg
                          width="28"
                          height="28"
                          viewBox="0 0 28 28"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M14 0C19.5915 0 24.1405 4.54902 24.1405 10.1405C24.1405 17.0797 15.0658 27.2668 14.6794 
								27.6971C14.3165 28.1013 13.6829 28.1006 13.3206 27.6971C12.9343 27.2668 3.85946 17.0797 3.85946 10.1405C3.85957 
								4.54902 8.40853 0 14 0ZM14 15.2424C16.8132 15.2424 19.1019 12.9537 19.1019 10.1405C19.1019 7.32725 16.8132 5.03858 
								14 5.03858C11.1868 5.03858 8.89815 7.3273 8.89815 10.1405C8.89815 12.9538 11.1868 15.2424 14 15.2424Z"
                            fill="#672E2E"
                          />
                        </svg>
                      </div>
                      <div className="loc-r">
                        Infront of Yes Bank, 175, Ashram Marg, Nemi Nagar
                        Vaishali Nagar, Jaipur, Rajasthan 302021
                      </div>
                    </li>
                    <li className="d-flex align-items-center">
                      <div className="address-icon">
                        <svg
                          width="28"
                          height="28"
                          viewBox="0 0 28 28"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2.46094 4.15625H25.5391C26.8988 4.15625 28 5.26433 28 6.61719V21.3828C28 22.7437 26.8907 23.8438 25.5391 23.8438H2.46094C1.11262 23.8438 0 22.7484 0 21.3828V6.61719C0 5.26673 1.09687 4.15625 2.46094 4.15625ZM2.80558 5.79688L12.2598 15.2013C12.7247 15.6662 13.3427 15.9221 14 15.9221C14.6573 15.9221 15.2753 15.6661 15.7417 15.1998L25.1944 5.79688H2.80558ZM26.3594 21.0489V6.95215L19.2698 14.0044L26.3594 21.0489ZM25.1934 22.2031L18.1066 15.1614L16.9002 16.3614C16.1255 17.1361 15.0956 17.5627 14 17.5627C12.9044 17.5627 11.8745 17.1361 11.1013 16.3629L9.89341 15.1614L2.80662 22.2031H25.1934ZM1.64062 21.0489L8.7302 14.0044L1.64062 6.95215V21.0489Z"
                            fill="#672E2E"
                          />
                        </svg>
                      </div>
                      <div className="loc-r">Email: care@demo.in</div>
                    </li>
                    <li className="d-flex align-items-center">
                      <div className="address-icon">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M23.9999 17.3403V21.1099C23.9999 22.7497 22.661 23.9372 21.1858 23.9372C15.7569 23.9372 10.4606 21.3707 6.52134 17.4471C2.58208 13.5236 -0.00012207 8.24293 -0.00012207 2.81403C-0.00012207 1.25466 1.26836 0 2.8271 0H6.59674C7.0026 0 7.3626 0.259476 7.49014 0.643979L9.37496 6.28523C9.46731 6.56167 9.42647 6.8645 9.26564 7.10639L7.66731 9.5045C8.27297 10.7749 9.3448 12.1634 10.5825 13.386C11.8208 14.608 13.225 15.6641 14.4954 16.2697L16.8935 14.6714C17.1366 14.5112 17.4382 14.4691 17.7146 14.5621L23.3691 16.4469C23.7536 16.5744 23.9999 16.9345 23.9999 17.3403Z"
                            fill="#672E2E"
                          />
                        </svg>
                      </div>
                      <div className="loc-r">Call: 1234-567-8899</div>
                    </li>
                  </ul>

                  <ContactFrom />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
