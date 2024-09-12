import FeedBack from "@/components/reviews/FeedBack";
import React from "react";

export default function CustomerFeedbackPage() {
  return (
    <div className="mt-4 px-20">
        <h1 className="my-10 text-primary text-4xl text-center">All Reviews about <span className="text-sky-500 font-bold">CarSpa</span> services</h1>
      <div className="space-y-6 mx-auto flex flex-col justify-center my-4">
        <FeedBack />
        <FeedBack />
        <FeedBack />
        <FeedBack />
        <FeedBack />
        <FeedBack />
        <FeedBack />
      </div>
    </div>
  );
}
