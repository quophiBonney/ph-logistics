"use client";
import React, { useEffect } from "react";
import "./about.css";
import AboutHero from "../ui-components/aboutHero";
import AboutUs from "../ui-components/about";
import Partners from "../ui-components/partners";
import AOS from "aos";
import "aos/dist/aos.css";
import Gallery from "../ui-components/gallery";
const About = () => {
  useEffect(function () {
    AOS.init();
  }, []);
  return (
    <div>
      <AboutHero />
      <AboutUs />
      <Gallery />
    </div>
  );
};

export default About;
