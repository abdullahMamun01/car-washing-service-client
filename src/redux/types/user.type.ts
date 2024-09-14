import { BaseEntity, TResponse } from ".";

export type TUser = {
  _id?: string;
  name: string;
  email: string;
  phone: string;
  role?: "user" | "admin" | "public";
  address: string;
  image?: string;
};

export type TUpdateProfile = {
  image?: File;
  name: string;
  phone: string;
  address: string;
};

export type TFeedback = {
  _id?: string;
  user?: {
    _id: string;
    name: string;
  };

  ratings: number;
  description: string;
};

export type TFeedbackResponse = TResponse<(TFeedback & BaseEntity)[]>;

export type TUserResponse = TResponse<(TUser & BaseEntity)[]>;
