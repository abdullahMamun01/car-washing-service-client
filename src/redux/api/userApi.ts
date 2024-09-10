import { baseApi } from "@/redux/api/baseApi";
import { TUser, TUserResponse } from "../types/user.type";
import { TResponse } from "../types";


const userAPi = baseApi.injectEndpoints({
  endpoints: (build) => ({
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
  }),
});

export const { useUserListQuery, useUpdateRoleMutation } = userAPi;
