import React from "react";
import Nav from "../../components/Nav/Nav";
import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import "./Home.scss";
import RULESIMG from "../../assets/images/rules.png";
import PRIZE from "../../assets/images/prize.svg";
import CALL from "../../assets/images/call.png";
import QN from "../../assets/images/qn.svg";

import SNOW from "../../assets/images/snow.svg";

const Home = () => {
  const rules = [
    "Align card with the theme.",
    "Use Canva, Figma, or Photoshop.",
    "One card per participant.",
    "File formats: AI, PSD, and Canva or Figma Link",
    "Copied designs are strictly not allowed. Ensure your submission is original and reflects your creativity.",
    "Deadline: 28th December 2024 at 11:59PM ⏰",
  ];
  return (
    <div className="home-page">
      <Nav data-scroll />
      <Hero data-scroll />
      <div className="main-sec" data-scroll>
        <About />
        <div className="guidelines">
          <div className="guide-head">
            <img src={RULESIMG} alt="" className="head-img" />
            Rules & Guidelines
          </div>
          <div className="guide-lines">
            {rules.map((item) => (
              <div className="list">
                <img src={QN} alt="" className="qn" />
                {item}
              </div>
            ))}
          </div>
          <div className="prizee">
            <img className="prize-img" src={PRIZE} alt="" />
          </div>
        </div>
        <div className="guidelines-left">
          <div className="guide-head">
            <img src={CALL} alt="" className="head-img" />
            contact Us
          </div>
          <div className="grp">
            <a href="tel:+917594824490" className="contact-btn">
              Nandakiran : 7594824490
            </a>
            <a href="mailto:mulearndevagiri@gmail.com" className="email-btn">
              Email : mulearndevagiri@gmail.com
            </a>
          </div>
        </div>
      </div>
      <footer>
        <a href="https://abhinav-k-e.github.io/"> Built and Designed by Abhinav K E </a>
        <a href="https://github.com/nandakiran-r"> & Nandakiran R</a>
        <img src={SNOW} className="foot-img" alt="" />
      </footer>
    </div>
  );
};

export default Home;
