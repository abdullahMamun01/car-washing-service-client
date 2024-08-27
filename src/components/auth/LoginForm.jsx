import React from "react";
import { Link } from "react-router-dom";

export default function LoginForm() {
  return (
    <>
      <form action="">
        <div className="mb-6">
          <label
            className="block mb-1.5 text-sm text-gray-900 font-semibold"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="w-full py-3 px-4 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-purple-500 focus:outline-purple rounded-lg"
            type="email"
            id="email"
            placeholder="pat@saturn.dev"
          />
        </div>
        <div className="mb-7">
          <div className="flex mb-1.5 items-center justify-between">
            <label
              className="block text-sm text-gray-900 font-semibold"
              htmlFor="password"
            >
              Password
            </label>
          </div>
          <div className="relative">
            <input
              className="w-full py-3 px-4 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-purple-500 focus:outline-purple rounded-lg"
              type="password"
              id="password"
              placeholder="Enter your password"
            />
          </div>
        </div>
        <button
          className="inline-block w-full py-3 px-9 mb-6 text-base text-white font-semibold bg-primary hover:bg-orange-900 focus:ring-2 focus:ring-orange-900 focus:ring-opacity-50 rounded-full shadow-4xl focus:outline-none transition duration-200"
          type="submit"
        >
          Sign In
        </button>
      </form>
      <p className="text-center font-semibold">
        <span>Don’t have an account?</span>
        <Link
          to="/auth/registration"
          className="ml-1 text-orange-900 hover:text-gray-900"
 
        >
          Sign up
        </Link>
      </p>
    </>
  );
}
