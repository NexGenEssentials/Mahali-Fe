import LandingPage from "./landingPage/landingPageTamplates";
import HeroSection from "./landingPage/components/hero/heroSection";
import PromotionSection from "./landingPage/components/hero/promotionSection";
import AboutUsSection from "./landingPage/components/about/aboutUsSection";
import ServiceSection from "./landingPage/components/service/serviceSection";
import DestinationSection from "./landingPage/components/destination/destinationSection";
import PackageSection from "./landingPage/components/package/packageSection";
import TestimonialSection from "./landingPage/components/testimonial/testimonialSection";

export default function Home() {
  return (
    <LandingPage>
      <section className="w-full"> 
      <HeroSection/>
      <PromotionSection/>
      <AboutUsSection/>
      <DestinationSection/>
      <ServiceSection/>
      <PackageSection/>
      <TestimonialSection/>
      </section>
    </LandingPage>
  );
}
