import { baseApi } from "@/redux/api/baseApi";
import { TBookingResponse } from "../types/booking.type";
import { TResponse } from "../types";

const bookingApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllBooking: build.query<TBookingResponse[], void>({
      query: () => {
        return {
          url: "/bookings",
          method: "GET",
        };
      },
      transformResponse: (response: TResponse<TBookingResponse[]>) =>
        response.data,
    }),
  }),
});

export const { useGetAllBookingQuery } = bookingApi;
