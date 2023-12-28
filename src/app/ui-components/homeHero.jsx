"use client";
import { Typewriter, Cursor } from "react-simple-typewriter";
import React from "react";
const HomeHero = () => {
  const text = Typewriter({
    words: ["China", "Dubai", "UK", "USA", "Turkey"],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 100,
    cursorBlinking: 0,
  });
  return (
    <div className="container-fluid px-4 home-hero">
      <div className="container">
        <div className="row">
          <div
            className="col-12 mt-5"
            data-aos="zoom-in"
            data-aos-delay="100"
            data-aos-duration="1500"
          >
            <h1 className="fs-1 text-light text-center mb-3">
              Freight Forwarding & Custom Clearance
            </h1>
            <p className="text-light fw-bold text-uppercase text-center hero-p">
              Helping you to ship from &nbsp;
              <span className="text-primary">{text}</span> <Cursor /> to Ghana.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
