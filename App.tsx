import FeaturedService from "@/components/features-service/FeaturedService";

import HeroSection from "@/components/HeroSection";
import NewsletterSignup from "@/components/NewsLater";
import CustomerFeedBack from "@/components/reviews/CustomerFeedBack";
import CarWashBeforeAfter from "@/components/services/CarWashBeforeAfter";



export default function App() {
  return (
    <div>
      <HeroSection />

      <FeaturedService />
      <CarWashBeforeAfter />
      <NewsletterSignup />
      <CustomerFeedBack />
     
    </div>
  );
}
