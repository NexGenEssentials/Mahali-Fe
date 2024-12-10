import React from "react";
import LandingPage from "../landingPageTamplates";
import PageHero from "../components/hero/pageHero";
import gorilla from "@/public/images/burundi.jpg";

const Packages = () => {
  return (
    <LandingPage>
      <div className="">
        <PageHero image={gorilla} title="Packages" />
      </div>
    </LandingPage>
  );
};

export default Packages;
