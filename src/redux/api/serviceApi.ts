import { baseApi } from "@/redux/api/baseApi";

import {
  TCarWashService,
  TCarWashServiceDataResponse,
  TCarWashServiceResponse,
} from "../types/service.type";
import { TResponse } from "../types";

const serviceApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllServices: build.query<
      TCarWashServiceDataResponse[],
      undefined | string
    >({
      query: (query) => {
        const url = query ? `/services${query}` : `/services`;
        return {
          url,
          method: "GET",
        };
      },
      providesTags: ["Service"],
      transformResponse: (response: TResponse<TCarWashServiceDataResponse[]>) =>
        response.data,
    }),

    getSingleService: build.query<TCarWashServiceDataResponse, string>({
      query: (serviceId) => {
        return {
          url: `/services/${serviceId}`,
          method: "GET",
        };
      },
      transformResponse: (response: TResponse<TCarWashServiceDataResponse>) =>
        response.data,
    }),

    availableServiceSlotDate: build.query<string[], string>({
      query: (serviceId) => {
        return {
          url: `/services/${serviceId}/available-dates`,
          method: "GET",
        };
      },
      providesTags: ["Slot"],
      transformResponse: (response: TResponse<string[]>) => response.data,
    }),
    addService: build.mutation<TCarWashServiceDataResponse, TCarWashService>({
      query: (payload) => {
        return {
          url: "/services",
          method: "POST",
          body: payload,
        };
      },
      invalidatesTags: ["Service"],
      transformResponse: (response: TCarWashServiceResponse) => response.data,
    }),

    updateService: build.mutation<void, TCarWashService>({
      query: (payload) => {
        const { id, ...updateData } = payload;
        return {
          url: `/services/${id}`,
          method: "PUT",
          body: updateData,
        };
      },
      invalidatesTags: ["Service"],
    }),

    deleteService: build.mutation<void, { serviceId: string }>({
      query: (payload) => {
        return {
          url: `/services/${payload.serviceId}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["Service"],
    }),
  }),
});

export const {
  useAddServiceMutation,
  useGetAllServicesQuery,
  useGetSingleServiceQuery,
  useUpdateServiceMutation,
  useDeleteServiceMutation,
  useAvailableServiceSlotDateQuery
} = serviceApi;
