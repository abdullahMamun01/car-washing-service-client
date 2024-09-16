import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import ControlledInput from "../form/ControlledInput";
import { loginSchema } from "@/schema/auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLoginMutation } from "@/redux/features/auth/authApi";
import { catchError } from "@/utils/catchError";
import { Button } from "../ui/button";
import { Spinner } from "../ui/spinner";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setUser, useToken } from "@/redux/features/auth/authSlice";
import toast from "react-hot-toast";
import SubmitButton from "../form/SubmitButton";

export default function LoginForm() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(loginSchema),
  });
  const [login, { isLoading }] = useLoginMutation();
  const onSubmit = async (formData) => {
    try {
      const response = await login(formData).unwrap();
      const {
        user: { createdAt, updatedAt, ...data },
        token,
      } = response;
      dispatch(setUser({ user: data, token }));
      toast.success("login successfully", { position: "top-right" });
      navigate("/");
    } catch (error) {
      catchError(error);
    }
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="mb-6">
          <ControlledInput
            className="w-full py-3 px-4 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-purple-500 focus:outline-purple rounded-lg"
            inputType="email"
            name="email"
            id="email"
            placeholder="pat@saturn.dev"
            label="email"
          />
        </div>
        <div className="mb-7">
          <ControlledInput
            className="w-full py-3 px-4 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-purple-500 focus:outline-purple rounded-lg"
            inputType="password"
            name="password"
            id="password"
            placeholder="**********"
            label="password"
          />
        </div>
        <SubmitButton
          className="inline-flex w-full py-3 px-9 mb-6 text-base text-white font-semibold bg-primary hover:bg-orange-900 focus:ring-2 focus:ring-orange-900 focus:ring-opacity-50 rounded-full shadow-4xl focus:outline-none transition duration-200"
          isLoading={isLoading}
        >
          {isLoading ? "submiting..." : "Login"}
        </SubmitButton>
      </form>
      <p className="text-center font-semibold">
        <span>Don’t have an account?</span>
        <Link
          to="/auth/register"
          className="ml-1 text-orange-900 hover:text-gray-900"
        >
          Sign up
        </Link>
      </p>
    </FormProvider>
  );
}
