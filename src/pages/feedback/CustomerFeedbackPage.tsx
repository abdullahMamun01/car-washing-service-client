import FeedBack from "@/components/reviews/FeedBack";
import { useGetAllFeedbackQuery } from "@/redux/api/userApi";
import React from "react";

export default function CustomerFeedbackPage() {
  const {data ,isLoading} = useGetAllFeedbackQuery()
  if(isLoading){
    return <div>Loadign...</div>
  }
  return (
    <div className="mt-4 px-20">
        <h1 className="my-10 text-primary text-4xl text-center">All Reviews about <span className="text-sky-500 font-bold">CarSpa</span> services</h1>
      <div className="space-y-6 mx-auto flex flex-col justify-center my-4">
      {data?.map((feedback) => (
            <FeedBack
              key={feedback.user?._id}
              rating={feedback.ratings}
              comments={feedback.description}
              name={feedback?.user?.name as string}
            />
          ))}


      </div>
    </div>
  );
}
