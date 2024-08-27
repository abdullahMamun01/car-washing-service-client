import React from "react";

export default function LoginIntro() {
  return (
    <div className="w-full lg:w-1/2 px-4 order-last lg:order-first">
      <div className="relative max-w-lg mx-auto lg:mx-0 lg:max-w-2xl h-full">
        <img
          className="block w-full h-142 sm:h-full object-cover rounded-5xl opacity-60"
          src="https://images.pexels.com/photos/325680/pexels-photo-325680.jpeg"
          alt=""
        />
        <div className="absolute bottom-0 w-full left-0 h-full flex items-center justify-center p-10">
          <div className="max-w-md mx-auto">
            <h4 className="font-heading text-3xl sm:text-5xl lg:text-4xl text-primary font-bold mb-8">
              Welcome to Our Car washes service
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
