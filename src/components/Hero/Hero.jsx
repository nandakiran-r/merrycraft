import React from "react";
import "./Hero.scss";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import HERO from "../../assets/images/hero.png";


const Hero = () => {
  //gsap
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      ".hero-txt",
      {
        scale: 0,
        opacity: 0,
      },
      {
        opacity: 1,
        scale: 1,
        stagger: 0.2,
        ease: "back.inOut",
        duration: 0.5,
      }
    );
    tl.fromTo(
      [".hero-img", ".hero-btn"],
      {
        y: 50,
        opacity: 0,
      },
      {
        opacity: 1,
        y: 0,
        ease: "back.inOut",
        duration: 0.5,
      }
    );
  });
  return (
    <div className="hero" data-scroll data-scroll-speed="0.1">
      <div className="img-container">
        <div className="txt-grp">
          <div className="hero-txt">MERRY</div>
          <div className="hero-txt hack-txt">CRAFT</div>
        </div>

        <img className="hero-img" src={HERO} alt="" />
      </div>
      <a
        href="https://airtable.com/appGbQllcamSsKWoO/pagSMxrmfCq1aotMJ/form
"
        className="hero-btn"
      >
        Submit Now
      </a>

    </div>
  );
};

export default Hero;
