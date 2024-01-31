import React from "react";
import HeroImage from "./../../images/hero.png";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero__section">
      <div className="hero__container">
        <div className="hero__content">
          <div className="hero__content__1">
            <p className="hero__text__1 ">
              We exist because we want to help you navigate and harness the
              potential of this ever-changing digital landscape
            </p>
          </div>
          <div className="hero__content__2">
            <p className="hero__text__2">Your</p>
            <p className="hero__text__2">Growth</p>
            <p className="hero__text__2">Partners</p>
          </div>
          <div className=" hero__content__3">
            <p className="hero__text__1">
              It's not a game of guesses, it's a game of numbers where growth is
              the ultimate goal. We leverage cutting-edge technology and
              data-driven insights to help you answer questions that unlock
              growth.
            </p>
          </div>
        </div>
        <div className="hero__image">
          <img src={HeroImage} alt="hero-image" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
