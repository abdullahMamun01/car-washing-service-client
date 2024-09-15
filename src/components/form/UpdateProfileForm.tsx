import React, { useState } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Upload } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  Controller,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import ControlledInput from "./ControlledInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { updateProfileSchema } from "@/schema/upate-profile.user";
import { TUpdateProfile } from "@/redux/types/user.type";
import { catchError } from "@/utils/catchError";
import { useGetUserQuery, useUpdateProfileMutation } from "@/redux/api/userApi";
import toast from "react-hot-toast";
import SubmitButton from "./SubmitButton";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { selectCurrentUser, setUser, useToken } from "@/redux/features/auth/authSlice";
import imageUrlParser from "@/lib/imageUrlParser";

export default function UpdateProfileForm() {
  const dispatch = useAppDispatch();
  const { data } = useGetUserQuery(undefined);

  const [updateProfile, { isLoading }] = useUpdateProfileMutation();
  const user = useAppSelector(selectCurrentUser);
  const token = useAppSelector(useToken)

  const form = useForm<TUpdateProfile>({
    resolver: zodResolver(updateProfileSchema),
    defaultValues: {
      name: data?.name || user?.name || "",
      address: user?.address,
      phone: user?.phone,
    },
  });
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const {
    formState: { errors },
    handleSubmit,
  } = form;

  const handleFileChange = (fileList: FileList | null) => {
    if (fileList && fileList.length > 0) {
      const file = fileList[0];
      const url = URL.createObjectURL(file);
      setImagePreview(url);

      // Return cleanup function
      return () => URL.revokeObjectURL(url);
    }
  };
  const onSubmit: SubmitHandler<TUpdateProfile> = async (
    formValues: TUpdateProfile
  ) => {
    const formData = new FormData();
    (Object.keys(formValues) as (keyof TUpdateProfile)[]).forEach((key) => {
      const value = formValues[key];

      if (value !== undefined) {
        if (key === "image" && value instanceof FileList) {
          formData.append(key, value[0]);
        } else if (typeof value === "string") {
          formData.append(key, value);
        }
      }
    });

    try {
      const response = await updateProfile(formData).unwrap();
      toast.success("profile update successfully", {
        position: "bottom-right",
      });

      console.log(response.name);
      dispatch(setUser({token , user: {...user , name: response.name} }));
    } catch (error) {
      catchError(error as Error);
    }
  };

  return (
    <div>
      <FormProvider {...form}>
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex items-center space-x-4">
            <Avatar className="w-20 h-20">
              <AvatarImage
                src={
                  imagePreview ||
                  (data?.image && imageUrlParser(data?.image)) ||
                  ""
                }
              />
              <AvatarFallback></AvatarFallback>
            </Avatar>
            <div>
              <Label htmlFor="image" className="cursor-pointer">
                <div className="flex items-center space-x-2 text-sm text-blue-600 hover:text-blue-700">
                  <Upload className="w-4 h-4" />
                  <span>Upload new picture</span>
                </div>
              </Label>
              <Controller
                name="image"
                control={form.control}
                render={({ field: { onChange, onBlur } }) => (
                  <Input
                    id="image"
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      onChange(e.target.files);
                      handleFileChange(e.target.files);
                    }}
                    onBlur={onBlur}
                    className="hidden"
                  />
                )}
              />
              {errors.image && (
                <p className="text-red-600 text-sm">
                  {errors.image.message as string}
                </p>
              )}
            </div>
          </div>
          <div className="space-y-2">
            <ControlledInput
              name="name"
              label="name"
              placeholder="enter your name"
              inputType="text"
            />
          </div>
          <div className="space-y-2">
            <ControlledInput
              name="address"
              label="address"
              placeholder="enter your address"
              inputType="text"
            />
          </div>
          <div className="space-y-2">
            <ControlledInput
              name="phone"
              label="phone"
              placeholder="enter your phone"
              inputType="text"
            />
          </div>
          <SubmitButton isLoading={isLoading} type="submit">
            {isLoading ? "submiting...." : "Update Profile"}
          </SubmitButton>
        </form>
      </FormProvider>
    </div>
  );
}
