import React from "react";
import FeedBack from "./FeedBack";

import FeedbackModal from "../Feedback/FeedbackModal";
import { useAppSelector } from "@/redux/hooks";
import { useToken } from "@/redux/features/auth/authSlice";
import FeedbackPrompt from "../Feedback/FeedBackPrompt";
import { useGetAllFeedbackQuery } from "@/redux/api/userApi";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
export default function CustomerFeedBack() {
  const token = useAppSelector(useToken);

  const { data, isLoading } = useGetAllFeedbackQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <section className="bg-gradient-to-b from-blue-50 to-white">
      <div className="mx-auto max-w-screen-2xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16 container">
        <div className="md:flex md:items-end md:justify-between">
          <div className="max-w-xl">
            <h2 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
              Read trusted reviews from our customers
            </h2>

            <p className="mt-6 max-w-lg leading-relaxed text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur praesentium natus sapiente commodi. Aliquid sunt
              tempore iste repellendus explicabo dignissimos placeat, autem
              harum dolore reprehenderit quis! Quo totam dignissimos earum.
            </p>
          </div>

          <Link
            to="/feedback"
            className="mt-6 inline-flex shrink-0 items-center gap-2 rounded-full border border-sky-500 px-5 py-3 text-sky-500 transition hover:bg-primary hover:text-white md:mt-0"
          >
            <span className="font-medium"> Read all reviews </span>

            <ArrowRight/>
          </Link>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          {data?.slice(0, 2).map((feedback) => (
            <FeedBack
              key={feedback.user?._id}
              rating={feedback.ratings}
              comments={feedback.description}
              name={feedback?.user?.name as string}
            />
          ))}
        </div>
        <div className="flex justify-center mt-10">
          {token ? <FeedbackModal /> : <FeedbackPrompt />}
        </div>
      </div>
    </section>
  );
}
