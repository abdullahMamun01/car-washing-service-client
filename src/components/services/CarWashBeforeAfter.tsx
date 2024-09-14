import React, { useState, useRef, useEffect } from "react";
import {
  Sparkles,
  CheckIcon,
  ArrowRightIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";


export default function CarWashBeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (sliderRef.current) {
      const rect = sliderRef.current.getBoundingClientRect();
      const position = ((event.clientX - rect.left) / rect.width) * 100;
      setSliderPosition(Math.min(Math.max(position, 0), 100));
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (sliderRef.current) {
        const rect = sliderRef.current.getBoundingClientRect();
        setSliderPosition((sliderPosition / 100) * rect.width);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [sliderPosition]);

  return (
    <section className="bg-gradient-to-b from-blue-50 to-white ">
      <div className="container  mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center text-primary mb-15">
          Experience the Shine
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div
            ref={sliderRef}
            className="relative h-80 md:h-96 lg:h-[30rem] rounded-lg overflow-hidden cursor-ew-resize bg-gray"
            onMouseMove={handleMouseMove}
            onTouchMove={(e) => {
              if (sliderRef.current) {
                const rect = sliderRef.current.getBoundingClientRect();
                const touch = e.touches[0];
                const position =
                  ((touch.clientX - rect.left) / rect.width) * 100;
                setSliderPosition(Math.min(Math.max(position, 0), 100));
              }
            }}
          >
            <div className="absolute inset-0">
              <img
                src="https://res.cloudinary.com/db5a7lbio/image/upload/v1726221383/car-washing/assets/car-wash-before_xrdb3r.jpg"
                alt="Clean car after wash"
                className="w-full h-full object-cover"
              />
            </div>
            <div
              className="absolute inset-0"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <img
                src="https://res.cloudinary.com/db5a7lbio/image/upload/v1726221467/car-washing/assets/Before_01_qnxx6z.jpg"
                alt="Dirty car before wash"
                className="w-full h-full object-cover"
              />
            </div>
            <div
              className="absolute top-0 bottom-0 w-1 "
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8  rounded-full flex items-center justify-center">
                <Sparkles className="" size={20} />
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-primary">
              Witness the transformation of your car with our premium wash
              services
            </h3>
            <p className="text-gray-900">
              Our expert team uses state-of-the-art equipment and eco-friendly
              products to bring out the best in your vehicle. From basic washes
              to full detailing, we've got you covered.
            </p>
            <ul className="space-y-2">
              {[
                "Streak-free finish",
                "Eco-friendly products",
                "Experienced staff",
                "Quick turnaround",
              ].map((feature, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <CheckIcon className="text-green-500" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Button className="mt-4 bg-sky-500 hover:bg-sky-400">
              Learn More <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
