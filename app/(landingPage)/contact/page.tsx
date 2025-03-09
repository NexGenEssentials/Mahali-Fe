import React from "react";
import LandingPage from "../landingPageTamplates";
import PageHero from "../components/hero/pageHero";
import nyungwe from "@/public/images/nyungwe3.jpg";

const ContactUs = () => {
  return (
    <LandingPage>
      <div className="">
        <PageHero image={nyungwe} title="Contact-Us" />
      </div>
    </LandingPage>
  );
};

export default ContactUs;
