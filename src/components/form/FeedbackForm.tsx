import { useUserFeedbackMutation } from "@/redux/api/userApi";
import { TFeedback } from "@/redux/types/user.type";
import { catchError } from "@/utils/catchError";
import { zodResolver } from "@hookform/resolvers/zod";
import { Star } from "lucide-react";
import React, { useState } from "react";
import {
  Controller,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { z } from "zod";
import SubmitButton from "./SubmitButton";

import toast from "react-hot-toast";

const schema = z.object({
  description: z.string().min(1, "Comments are required"), // Validation for textarea
  ratings: z
    .number({ required_error: "Rating is required" })
    .min(1, "Rating minimum 1 "), // Ensures that at least 1 rating is selected
});

export default function FeedbackForm() {
  const [hover, setHover] = useState(0);
  const [feedback, { isLoading }] = useUserFeedbackMutation();

  const onSubmit: SubmitHandler<TFeedback> = async (formData) => {
    try {
      await feedback(formData).unwrap();
      toast.success('review successfully' , {position:'bottom-right'})
      form.reset()
      
    } catch (error) {
      catchError(error as Error);
    }
  };

  const form = useForm<TFeedback>({
    resolver: zodResolver(schema),
  });
  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="flex flex-col items-center justify-center">
          <Controller
            control={form.control}
            name="ratings"
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <div onBlur={onBlur} ref={ref}>
                {[...Array(5)].map((_, index) => {
                  const starValue = index + 1;
                  return (
                    <button
                      key={index}
                      type="button"
                      className={`transform transition-transform duration-200 ease-in-out hover:scale-110 focus:outline-none ${
                        starValue <= (hover || value)
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }`}
                      onClick={() => {
                        onChange(starValue);
                      }}
                      onMouseEnter={() => setHover(starValue)}
                      onMouseLeave={() => setHover(value)}
                    >
                      <Star
                        fill={
                          starValue <= (hover || value)
                            ? "currentColor"
                            : "none"
                        }
                        stroke="currentColor"
                        strokeWidth={2}
                        size={32}
                      />
                    </button>
                  );
                })}
              </div>
            )}
          />
          {form.formState.errors.ratings && (
            <span className="my-2 text-red-500 ">
              {form.formState.errors.ratings.message as string}
            </span>
          )}
        </div>

        <textarea
          {...form.register("description")}
          placeholder="Share your thoughts..."
          className="w-full h-32 px-4 py-2 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent resize-none transition-all duration-200 ease-in-out"
        />
        {form.formState.errors.description && (
          <span className="my-2 text-red-500">
            {form.formState.errors.description.message as string}
          </span>
        )}
        <SubmitButton
          isLoading={isLoading}
          type="submit"
          className="w-full bg-gradient-to-r from-sky-600 to-blue-500 text-white font-bold py-2 px-4 rounded-lg transition-all duration-200 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
        >
          {isLoading ? <span> submiting review...</span> : "Submit Review"}
        </SubmitButton>
      </form>
    </FormProvider>
  );
}
