import React from "react";
import FeedBack from "./FeedBack";
import FeedBackIcon from '@/assets/icons/feedback.png'
export default function CustomerFeedBack() {
  return (
    <section className="bg-gray-50 ">
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

          <a
            href="#"
            className="mt-6 inline-flex shrink-0 items-center gap-2 rounded-full border border-primary px-5 py-3 text-primary transition hover:bg-primary hover:text-white md:mt-0"
          >
            <span className="font-medium"> Read all reviews </span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-4 rtl:rotate-180"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          <FeedBack />
          <FeedBack />
          <FeedBack />
        </div>
        <div className="flex justify-center mt-10">
          <button className="inline-flex justify-center items-center gap-2 rounded border border-primary bg-primary px-8 py-3 text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500">
            <img className="w-7 h-6 object-contain mr-2" src={FeedBackIcon} alt="" />
            <span className="text-sm font-medium"> Feedback </span>

          </button>
        </div>
      </div>
    </section>
  );
}
