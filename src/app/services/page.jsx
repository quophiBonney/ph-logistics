"use client";
import React, { useEffect } from "react";
import "./services.css";
import ServicesHero from "../ui-components/servicesHero";
import Freight from "../ui-components/freight";
import Partners from "../ui-components/partners";
import Solution from "../ui-components/solution";
import AOS from "aos";
import "aos/dist/aos.css";
const Services = () => {
  useEffect(function () {
    AOS.init();
  }, []);
  return (
    <div>
      <ServicesHero />
      <Freight />
      <Solution />
    </div>
  );
};

export default Services;
