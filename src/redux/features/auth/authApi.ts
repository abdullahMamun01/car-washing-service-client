import { baseApi } from "@/redux/api/baseApi";
import { TResponse } from "@/redux/types";
import { TUser } from "@/redux/types/user.type";

type TLoginBody = {
  email: string;
  password: string;
};

type TRegisterBody = Omit<TUser , 'role'> & {password:string};

type UserData = TUser & {
  _id: string;
  createdAt:string ,
  updatedAt:string
};

type TLoginResponse = TResponse<UserData> & { token: string };
type TRegisterResponse = UserData;


type AuthData  = {
  user:UserData ,
  token:string
}

const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<AuthData, TLoginBody>({
      query: (credentials) => {
        return {
          url: "/auth/login",
          method: "POST",
          body: credentials,
        };
      },
      transformResponse: (response: TLoginResponse) => ({user:response.data ,token:response.token}),
    }),


    register: build.mutation<TRegisterResponse, TRegisterBody>({
      query: (credentials) => {
        return {
          url: "/signup",
          method: "POST",
          body: credentials,
        };
      },
      transformResponse: (response: TResponse<TRegisterResponse>) => response.data,
    }),
  }),
});

export const { useLoginMutation ,useRegisterMutation } = authApi;
