
import Service from '@/components/features-service/Service'
import HeroSection from '@/components/HeroSection'
import NewsletterSignup from '@/components/NewsLater'
import CustomerFeedBack from '@/components/reviews/CustomerFeedBack'


export default function App() {
  return (
    <div>

      <HeroSection />
      <Service/>

      <NewsletterSignup/>
      <CustomerFeedBack/>
    </div>
  )
}
