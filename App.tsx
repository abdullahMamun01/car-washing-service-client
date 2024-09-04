import FeaturedService from "@/components/features-service/FeaturedService";

import HeroSection from "@/components/HeroSection";
import NewsletterSignup from "@/components/NewsLater";
import CustomerFeedBack from "@/components/reviews/CustomerFeedBack";


export default function App() {
  return (
    <div>
      <HeroSection />
      <FeaturedService />
      <NewsletterSignup />
      <CustomerFeedBack />
     
    </div>
  );
}
