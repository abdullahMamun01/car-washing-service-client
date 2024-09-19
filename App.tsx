import FeaturedService from "@/components/features-service/FeaturedService";

import HeroSection from "@/components/HeroSection";
import NewsletterSignup from "@/components/NewsLater";
import PriceSection from "@/components/PriceSection/PriceSection";
import CustomerFeedBack from "@/components/reviews/CustomerFeedBack";
import CarWashBeforeAfter from "@/components/services/CarWashBeforeAfter";



export default function App() {
  return (
    <div>
      <HeroSection />

      <FeaturedService />
      <PriceSection/>
      <CarWashBeforeAfter />

      <NewsletterSignup />
      <CustomerFeedBack />
     
    </div>
  );
}
