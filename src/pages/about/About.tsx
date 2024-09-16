import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

import { Car, Droplets, Clock, ThumbsUp } from "lucide-react"
import React from "react"

export default function AboutPage() {
  return (
    <div className=" mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">About <span className="text-sky-500">CareSpa</span></h1>
      
      <div className="max-w-7xl mx-auto">
        <p className="text-lg mb-6">
          <span className="text-2xl font-bold text-center text-sky-600">CareSpa</span>   is your premier destination for top-quality car washing services. 
          We take pride in delivering exceptional results that leave your vehicle 
          looking pristine and protected.
        </p>
        
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="mb-6">
          Our mission is to provide convenient, eco-friendly, and professional car 
          washing services that exceed our customers' expectations. We strive to 
          make every car shine while respecting the environment and valuing our 
          customers' time.
        </p>
        
        <h2 className="text-2xl font-semibold mb-4">Why Choose SparkleWash?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <FeatureCard 
            icon={<Car className="h-6 w-6" />}
            title="Expert Care"
            description="Our trained professionals use the best techniques and products."
          />
          <FeatureCard 
            icon={<Droplets className="h-6 w-6" />}
            title="Eco-Friendly"
            description="We use water-saving methods and biodegradable cleaning products."
          />
          <FeatureCard 
            icon={<Clock className="h-6 w-6" />}
            title="Quick Service"
            description="Get your car cleaned and ready in no time with our efficient process."
          />
          <FeatureCard 
            icon={<ThumbsUp className="h-6 w-6" />}
            title="Satisfaction Guaranteed"
            description="We're not happy unless you're thrilled with the results."
          />
        </div>
        
        <div className="bg-muted p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Our Commitment to Quality</h3>
          <p>
            At SparkleWash, we believe that a clean car is a happy car. That's why we 
            invest in the latest car washing technology and use only premium cleaning 
            products. Our team undergoes regular training to stay up-to-date with the 
            best car care practices.
          </p>
        </div>
      </div>
    </div>
  )
}
type TFeatureProps = {
    icon: React.ReactNode ,
    title:string ,
    description: string
}

function FeatureCard ({ icon, title, description }:TFeatureProps) {
  
  


  return (
    <Card>
      <CardHeader className="flex flex-row items-center gap-4">
        <div className="bg-sky-500 p-2 rounded-full text-white">
          {icon}
        </div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  )
}