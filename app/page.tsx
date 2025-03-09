import AboutUsSection from "./(landingPage)/components/about/aboutUsSection";
import DestinationSection from "./(landingPage)/components/destination/destinationSection";
import HeroSection from "./(landingPage)/components/hero/heroSection";
import PromotionSection from "./(landingPage)/components/hero/promotionSection";
import PackageSection from "./(landingPage)/components/package/packageSection";
import ServiceSection from "./(landingPage)/components/service/serviceSection";
import TestimonialSection from "./(landingPage)/components/testimonial/testimonialSection";
import LandingPage from "./(landingPage)/landingPageTamplates";


export default function Home() {
  return (
    <LandingPage>
      <section className="w-full"> 
      <HeroSection/>
      <PromotionSection/>
      <AboutUsSection/>
      <ServiceSection/>
      <PackageSection/>
      <DestinationSection/>
      <TestimonialSection/>
      </section>
    </LandingPage>
  );
}
