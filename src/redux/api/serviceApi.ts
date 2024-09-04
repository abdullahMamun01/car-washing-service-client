import { baseApi } from "@/redux/api/baseApi";

import {
  TCarWashService,
  TCarWashServiceDataResponse,
  TCarWashServiceResponse,
} from "../types/service.type";
import { TResponse } from "../types";

const serviceApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllServices: build.query<TCarWashServiceDataResponse[], undefined>({
      query: () => {
        return {
          url: "/services",
          method: "GET",
        };
      },
      transformResponse: (response: TResponse<TCarWashServiceDataResponse[]>) =>
        response.data,
    }),
    addService: build.mutation<TCarWashServiceDataResponse, TCarWashService>({
      query: (payload) => {
        return {
          url: "/services",
          method: "POST",
          body: payload,
        };
      },
      transformResponse: (response: TCarWashServiceResponse) => response.data,
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
  }),
});

export const { useAddServiceMutation, useGetAllServicesQuery,useGetSingleServiceQuery } = serviceApi;
