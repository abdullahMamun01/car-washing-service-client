import React from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
const HeroImage =
  "http://aqualine.like-themes.com/wp-content/uploads/2018/02/washer.png";

export default function HeroSection() {
  return (
    <section className="bg-gray-500 overflow-hidden grid md:grid-cols-12 min-h-screen ">
      <div className="px-4 mx-auto col-span-6 flex items-center justify-center">
        <div className="mt-16 lg:mb-24 max-w-md">
          <div className="max-w-2xl lg:max-w-md mb-6">
            <h2 className="mb-8 text-4xl md:text-5xl text-primary font-bold font-heading">
              Premium Car Wash for Every Vehicle
            </h2>
            <p className="text-lg text-gray-200 leading-loose">
              Experience top-notch car cleaning for all vehicle types{" "}
              <span className="text-blue-500 font-bold">
                —cars, trucks, SUVs, motorcycles, and more.
              </span>{" "}
              Our expert team uses high-quality products and advanced techniques
              to make your vehicle shine. From a quick wash to a detailed clean,
              trust us to keep your ride spotless and looking brand new.
            </p>
          </div>
          <div className="my-4">
            <Link to="/services">
              <Button>
                Go To Services <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
          <div className=" flex flex-wrap">
            <input
              className="mb-2 md:mb-0 w-full md:w-2/3 py-3 pl-4 text-sm text-gray-900 rounded"
              type="text"
              placeholder="Type your e-mail"
            />
            <button className="w-full md:w-auto py-3 px-6 md:ml-2 text-sm text-white font-semibold bg-primary hover:bg-gray-800 rounded">
              Start for free
            </button>
          </div>
        </div>
      </div>
      <div className="max-md:hidden col-span-6  flex items-center justify-center ">
        <img
          className=" max-w-[1200px] ml-90 max-h-full "
          src={HeroImage}
          alt="Hero"
        />
      </div>
    </section>
  );
}
