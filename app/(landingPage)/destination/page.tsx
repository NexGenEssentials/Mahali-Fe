import React from "react";
import LandingPage from "../landingPageTamplates";
import PageHero from "../components/hero/pageHero";
import gorilla from "@/public/images/Gorilla2.jpg";

const Destination = () => {
  return (
    <LandingPage>
      <div className="">
        <PageHero image={gorilla} title="Contact-Us" />
      </div>
    </LandingPage>
  );
};

export default Destination;
