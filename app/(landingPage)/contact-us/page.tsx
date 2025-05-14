import React from "react";
import LandingPage from "../landingPageTamplates";
import ContactUsForm from "@/app/account/components/contactForm";
import PageHero from "../components/hero/pageHero";
import contact from "@/public/images/serengeti1.jpg";

const ContactPage = () => {
  return (
    <LandingPage>
      {" "}
      <PageHero image={contact} title="Contact us" />
      <ContactUsForm />
    </LandingPage>
  );
};

export default ContactPage;
