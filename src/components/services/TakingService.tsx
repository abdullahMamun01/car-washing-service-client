import React from "react";
import { DatePicker } from "../date/DatePicker";

export default function TakingService() {
  return (
    <div>
      <div className="w-screen ">
        <div className="mx-auto grid max-w-screen-xl  pb-20 pt-20 z-[-100]">
          <div className="z-[-100]">
            <p className="font-serif text-xl font-bold text-blue-900">
              Select a service
            </p>
            <div className="mt-4 grid max-w-3xl gap-x-4 gap-y-3 sm:grid-cols-2 md:grid-cols-3 ">
              {/* list of selected vehicle by follwoing this design */}
              <div className="relative ">
                <input
                  className="peer hidden"
                  id="radio_1"
                  type="radio"
                  name="radio"
                  checked
                />
                <span className="absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-blue-600 peer-checked:border-white"></span>
                <label
                  className="flex h-full cursor-pointer flex-col rounded-lg p-4 shadow-lg shadow-slate-100 peer-checked:bg-blue-500 peer-checked:text-white"
                  htmlFor="radio_1"
                >
                  <span className="mt-2 font-medium">Financial Planning</span>
                  <span className="text-xs uppercase">1 Hour</span>
                </label>
              </div>
           
            </div>
          </div>

          <div className="">
            <p className="mt-8 font-serif text-xl font-bold text-blue-900">
              Date by slot Available
            </p>
            <div className="relative mt-4 w-56">
              <DatePicker />
            </div>
          </div>

          <div className="">
            <p className="mt-8 font-serif text-xl font-bold text-blue-900">
              Select a time
            </p>
            <div className="mt-4 grid grid-cols-4 gap-2 lg:max-w-xl">
              <button className="rounded-lg bg-blue-100 px-4 py-2 font-medium text-blue-900 active:scale-95">
                12:00
              </button>
              <button className="rounded-lg bg-blue-100 px-4 py-2 font-medium text-blue-900 active:scale-95">
                14:00
              </button>
              <button className="rounded-lg bg-sky-500 px-4 py-2 font-medium text-white active:scale-95">
                09:00
              </button>
              <button className="rounded-lg bg-blue-100 px-4 py-2 font-medium text-blue-900 active:scale-95">
                12:00
              </button>
              <button className="rounded-lg bg-blue-100 px-4 py-2 font-medium text-blue-900 active:scale-95">
                15:00
              </button>
              <button className="rounded-lg bg-blue-100 px-4 py-2 font-medium text-blue-900 active:scale-95">
                12:00
              </button>
              <button className="rounded-lg bg-blue-100 px-4 py-2 font-medium text-blue-900 active:scale-95">
                14:00
              </button>
              <button className="rounded-lg bg-blue-100 px-4 py-2 font-medium text-blue-900 active:scale-95">
                12:00
              </button>
            </div>
          </div>

          <button className="mt-8 w-56 rounded-full  bg-blue-600 px-10 py-2 text-md font-bold text-white transition hover:translate-y-1">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}
