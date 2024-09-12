import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const NewsletterSignup = () => {
  return (
    <section className=" mx-auto px-4 py-16">
      <div className="bg-sky-600 text-white rounded-2xl p-8 md:p-12">
        <h2 className="text-3xl font-bold mb-4 text-center">
          Sign up for our newsletter
        </h2>
        <p className="text-center mb-8">
          Stay up to date with the latest news, special offers, and exclusive
          discounts.
        </p>
        <form className="max-w-md mx-auto flex flex-col md:flex-row gap-4">
          <Input
            className="flex-grow text-gray-900"
            placeholder="Enter your email"
            type="email"
            required
          />
          <Button
            className="bg-white text-blue-600 hover:bg-blue-50"
            type="submit"
          >
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSignup;
