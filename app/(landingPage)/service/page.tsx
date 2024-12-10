import React from "react";
import LandingPage from "../landingPageTamplates";
import PageHero from "../components/hero/pageHero";
import nyungwe from "@/public/images/nyungwe2.jpg";

const Services = () => {
  return (
    <LandingPage>
      <div className="">
        <PageHero image={nyungwe} title="Services" />
      </div>
    </LandingPage>
  );
};

export default Services;
