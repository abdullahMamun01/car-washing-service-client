import { BadgeCheck, Clock, Timer } from "lucide-react";
import React from "react";

export default function ServiceDetails() {
  const imageUrl = `https://media.istockphoto.com/id/474203926/photo/man-cleaning-upholstery-of-his-vehicle.jpg?s=1024x1024&w=is&k=20&c=U6TYteUvTxJb0Nr6JxbieMUmlEwbwRc9z7wvrQJjsv4=`;
  return (
    <div className="my-4">
      <div className="grid grid-cols-2 gap-8">
        <div className="col-span-1 h-full">
          <img src={imageUrl} className="object-cover h-full" alt="" />
        </div>
        <div className="col-span-1 bg-stone-50 py-10 shadow-md">
          <h1 className="text-4xl text-primary  mb-4 max-w-2xl mx-auto">
            Interior Detailing
          </h1>
          <h2 className="text-xl my-4 max-w-2xl mx-auto">
            Availability : <span className="text-green-600">Available</span>
          </h2>
          <h3 className="text-lg my-4 max-w-2xl mx-auto text-primary flex gap-2">
            Duration :{" "}
            <span className="text-red-500 flex gap-2">
              {" "}
              <Clock className="w-4 h-4 my-auto" /> 01:00 hour
            </span>
          </h3>
          <h4 className="text-xl my-4 max-w-2xl mx-auto">
            Price: <span className="text-blue-600">$30.00</span>
          </h4>
          <div>
            <h2 className="text-4xl text-primary  mb-4 max-w-2xl mx-auto">
              Services Overview
            </h2>
            <p className="text-gray-900 max-w-2xl mx-auto text-lg text-gray-600 font-inter">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
              magnam, illo temporibus consequuntur, officiis provident, corrupti
              sequi ex rerum maiores aliquam autem quos necessitatibus sunt
              asperiores. Dolorem cupiditate voluptatum accusamus.
            </p>
          </div>

          <h4 className="text-xl my-4 max-w-2xl mx-auto flex">
            Slot Available time :{" "}
            <span className="text-green-500 flex gap-1">
              <Timer /> 09:00 am -- 08:00 pm
            </span>
          </h4>

          <div className="mb-4 max-w-2xl mx-auto">
            <h1 className="text-2xl text-primary my-4 ">Services Benefit</h1>
            <ul className="">
              <li className="my-2 flex gap-2">
                <BadgeCheck className="text-green-600" /> Elementum curabitur
                vitae nunc sed velit
              </li>
              <li className="my-2 flex gap-2">
                <BadgeCheck className="text-green-600" /> Elementum curabitur
                vitae nunc sed velit
              </li>
              <li className="my-2 flex gap-2">
                <BadgeCheck className="text-green-600" /> Elementum curabitur
                vitae nunc sed velit
              </li>
              <li className="my-2 flex gap-2">
                <BadgeCheck className="text-green-600" /> Elementum curabitur
                vitae nunc sed velit
              </li>
              <li className="my-2 flex gap-2">
                <BadgeCheck className="text-green-600" /> Elementum curabitur
                vitae nunc sed velit
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
