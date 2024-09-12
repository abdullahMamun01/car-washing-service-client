import { baseApi } from "@/redux/api/baseApi";
import {  TUser, TUserResponse } from "../types/user.type";
import { TResponse } from "../types";

const userAPi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getUser: build.query<TUser , undefined>({
      query: () => {
        return {
          url: `/me`,
          method: "GET",
        };
      },
      providesTags: ["User"],
      transformResponse: (response: TResponse<TUser>) => response.data,
    }),
    userList: build.query<TUser[], undefined>({
      query: () => {
        return {
          url: `/users`,
          method: "GET",
        };
      },
      providesTags: ["User"],
      transformResponse: (response: TUserResponse) => response.data,
    }),
    updateRole: build.mutation<TUser, { role: string; userId: string }>({
      query: (payload) => {
        return {
          url: `/users/${payload.userId}/role`,
          method: "PUT",
          body: { role: payload.role },
        };
      },
      invalidatesTags: ["User"],
      transformResponse: (response: TResponse<TUser>) => response.data,
    }),
    updateProfile: build.mutation<TUser, FormData>({
      query: (payload) => {
        return {
          url: `/me/update-profile`,
          method: "PUT",
          body:payload
        };
      },
      invalidatesTags: ["User"],
    }),
  }),
});

export const { useUserListQuery, useUpdateRoleMutation ,useUpdateProfileMutation,useGetUserQuery} = userAPi;
