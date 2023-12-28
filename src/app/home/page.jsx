import React from "react";
import HomeHero from "../ui-components/homeHero";
import Card from "../ui-components/card";
import ServicesCard from "../ui-components/services";
import "./home.css";
import Welcome from "../ui-components/welcome";
import Partners from "../ui-components/partners";
import Remarks from "../ui-components/remarks";

const Home = () => {
  return (
    <div>
      <HomeHero />
      <Card />
      <Remarks />
      <Welcome />
      <ServicesCard />
      <Partners />
    </div>
  );
};

export default Home;
