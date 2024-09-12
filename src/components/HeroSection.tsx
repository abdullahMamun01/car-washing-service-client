import React from "react";
import { Button } from "./ui/button";
import {  DropletIcon } from "lucide-react";

const HeroImage =
  "http://aqualine.like-themes.com/wp-content/uploads/2018/02/washer.png";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white overflow-hidden grid md:grid-cols-12 min-h-screen ">
      <div className="px-4 mx-auto col-span-6 flex items-center justify-center">
        <div className="mt-16 lg:mb-2 max-w-md">
          <div className="max-w-2xl lg:max-w-md mb-6">
            <h2 className="mb-8 text-4xl md:text-5xl text-primary font-bold font-heading">
              <span className="block xl:inline">Your car deserves</span>{" "}
              <span className="block text-sky-600 xl:inline">
                the best care
              </span>
            </h2>
            <p className="text-lg text-gray-200 leading-loose">
              Experience top-notch car cleaning for all vehicle types{" "}
              <span className="text-sky-500 font-bold">
                —cars, trucks, SUVs, motorcycles, and more.
              </span>{" "}
              Our expert team uses high-quality products and advanced techniques
              to make your vehicle shine. From a quick wash to a detailed clean,
              trust us to keep your ride spotless and looking brand new.
            </p>
          </div>
          <div className="flex space-x-4">
            <Button className="bg-sky-600 text-white hover:bg-sky-700 px-6 py-3">
              <DropletIcon className="w-4 h-4 mr-1" /> Book a Wash
            </Button>
            <Button
              variant="outline"
              className="text-sky-600 border-sky-600 hover:bg-sky-50 px-6 py-3"
            >
              Our Services
            </Button>
          </div>
        </div>
      </div>
      <div className="relative max-md:hidden col-span-6  flex items-center justify-center ">
      <div className="absolute inset-0 ml-45 bg-sky-200 transform rotate-2 rounded-2xl h-5/6 my-auto"></div>
        <img
          className=" max-w-[1200px] ml-90 max-h-full relative "
          src={HeroImage}
          alt="Hero"
        />
      </div>
    </section>
  );
}
