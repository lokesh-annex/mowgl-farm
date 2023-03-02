import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import Header from "./component/Header";
import Topslide from "./component/TopSlide";
import About from "./component/About";
import Benfites from "./component/Benfites";
import WhyChooseUs from "./component/WhyChooseUs";
import Process from "./component/Process";
import ContactUs from "./component/ContactUs";
import Footer from "./component/Footer";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Header />
    <Topslide />
    <About />
    <Benfites />
    <WhyChooseUs />
    <Process />
    <ContactUs />
    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
