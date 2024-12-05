import LandingPage from "./landingPage/landingPageTamplates";
import HeroSection from "./landingPage/components/hero/heroSection";
import PromotionSection from "./landingPage/components/hero/promotionSection";
import AboutUsSection from "./landingPage/components/about/aboutUsSection";
import ServiceSection from "./landingPage/components/service/serviceSection";
import DestinationSection from "./landingPage/components/destination/destinationSection";

export default function Home() {
  return (
    <LandingPage>
      <section className="w-full"> 
      <HeroSection/>
      <PromotionSection/>
      <AboutUsSection/>
      <DestinationSection/>
      <ServiceSection/>
      </section>
    </LandingPage>
  );
}
