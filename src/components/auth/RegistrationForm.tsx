import React from "react";
import {
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import ControlledInput from "../form/ControlledInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "@/schema/auth.schema";
import { useRegisterMutation } from "@/redux/features/auth/authApi";
import { catchError } from "@/utils/catchError";
import { Button } from "../ui/button";
import { Spinner } from "../ui/spinner";
import toast from "react-hot-toast";
type FormValues = {
  name: string;
  email: string;
  phone: string;
  address: string;
  password:string,

};
export default function RegistrationForm() {
  const [register, { isLoading }] = useRegisterMutation();
  const form = useForm<FormValues>({
    resolver: zodResolver(registerSchema),
  });

  const navigate = useNavigate()
  const onSubmit:SubmitHandler<FormValues>  = async (formData ) => {
    try {
       await register(formData ).unwrap();
      navigate('/auth/login')
      toast.success('account register successfully' , {position:'top-right'})
    } catch (error) {
      catchError(error as Error);
    }
  };

  return (
    <FormProvider {...form}>
      <form action="" onSubmit={form.handleSubmit(onSubmit)}>
        <div className="mb-5">
          <ControlledInput
            className="w-full py-3 px-4 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-purple-500 focus:outline-purple rounded-lg"
            inputType="text"
            placeholder="Enter your Name"
            name="name"
            id="name"
            label="Name"
          />
        </div>
        <div className="mb-5">
          <ControlledInput
            className="w-full py-3 px-4 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-purple-500 focus:outline-purple rounded-lg"
            inputType="email"
            placeholder="Enter your Email"
            name="email"
            id="email"
            label="Email"
          />
        </div>
        <div className="mb-5">
          <div className="relative">
            <ControlledInput
              className="w-full py-3 px-4 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-purple-500 focus:outline-purple rounded-lg"
              inputType="phone"
              placeholder="Enter your Phone"
              name="phone"
              id="phone"
              label="phone"
            />
            <button className="absolute top-1/2 right-0 mr-3 transform -translate-y-1/2 inline-block hover:scale-110 transition duration-100">
              <img src="saturn-assets/images/sign-up/icon-eye.svg" alt="" />
            </button>
          </div>
        </div>

        <div className="mb-5">
          <ControlledInput
            className="w-full py-3 px-4 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-purple-500 focus:outline-purple rounded-lg"
            inputType="text"
            placeholder="Enter your Address"
            name="address"
            id="address"
            label="address"
          />
        </div>
        <div className="mb-5">
          <ControlledInput
            className="w-full py-3 px-4 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-purple-500 focus:outline-purple rounded-lg"
            inputType="password"
            placeholder="Enter your password"
            name="password"
            id="password"
            label="password"
          />
        </div>

        <div className="flex mb-6 items-center">
          <input type="checkbox" value="" id="" />
          <label className="ml-2 text-xs text-gray-800" htmlFor="">
            Remember me
          </label>
        </div>
        <Button
        disabled={isLoading}
          className="relative group block w-full mb-6 py-3 px-5 text-center text-sm font-semibold text-orange-50 bg-primary rounded-full overflow-hidden"
          type="submit"
        >
          <div className="absolute top-0 right-full w-full h-full bg-primary bg-gray-900 transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"></div>
          {
            isLoading ? <span className="relative mx-auto text-md flex gap-2 justify-center "> wait <Spinner size="small" className="text-white" /> </span> :
            <span className="relative">Signup</span>
          }
        </Button>
        <div className="flex mb-6 items-center">
          <div className="w-full h-px bg-gray-300"></div>
          <span className="mx-4 text-sm font-semibold text-gray-500">Or</span>
          <div className="w-full h-px bg-gray-300"></div>
        </div>
        <a
          className="inline-flex w-full mb-5 py-3 px-4 items-center justify-center rounded-full border border-gray-200 hover:border-gray-400 transition duration-100"
          href="#"
        >
          <img src="saturn-assets/images/sign-up/icon-facebook.svg" alt="" />
          <span className="ml-4 text-sm font-semibold text-gray-500">
            Login with Facebook
          </span>
        </a>
        <a
          className="inline-flex w-full mb-16 py-3 px-4 items-center justify-center rounded-full border border-gray-200 hover:border-gray-400 transition duration-100"
          href="#"
        >
          <img src="saturn-assets/images/sign-up/icon-apple.svg" alt="" />
          <span className="ml-4 text-sm font-semibold text-gray-500">
            Login with Google
          </span>
        </a>
        <div className="text-center">
          <span className="text-xs font-semibold text-gray-900">
            <span>Already have an account?</span>
            <Link
              className="inline-block text-[14px] ml-1 text-primary hover:text-blue-600"
              to="/auth/login"
            >
              Login 
            </Link>
          </span>
        </div>
      </form>
    </FormProvider>
  );
}

