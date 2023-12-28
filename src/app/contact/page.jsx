"use client";
import React, { useEffect } from "react";
import ContactHero from "../ui-components/contactHero";
import "./contact.css";
import Intouch from "../ui-components/intouch";
import OfficeLocation from "../ui-components/officeLocation";
import Map from "../ui-components/map";
import AOS from "aos";
import "aos/dist/aos.css";
const Contact = () => {
  useEffect(function () {
    AOS.init();
  }, []);
  return (
    <div>
      <ContactHero />
      <Intouch />
      <OfficeLocation />
      <Map />
    </div>
  );
};

export default Contact;
