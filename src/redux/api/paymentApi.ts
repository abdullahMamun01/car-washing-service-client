import { baseApi } from "@/redux/api/baseApi";
import {
  TStripeChecoutResponse,
  StripeCheckoutRequest,
  TStripeResponse,
  TSripeSessionPayload,
  TPayment,
} from "../types/payment.type";
import { TResponse } from "../types";

const paymentApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    stripePayment: build.mutation<
      TStripeChecoutResponse,
      StripeCheckoutRequest
    >({
      query: (paymentPayload) => {
        return {
          url: "/payment/stripe-checkout",
          method: "POST",
          body: paymentPayload,
        };
      },
      transformResponse: (response: TStripeResponse) => response.data,
    }),

    processPaymentAndBooking: build.mutation<void, TSripeSessionPayload>({
      query: (stripeSessionPayload) => {
        return {
          url: "/payment/confirm-payment",
          method: "POST",
          body: stripeSessionPayload,
        };
      },
      transformResponse: (response: any) => response.data,
    }),

    paymentList: build.query<TPayment[], string>({
      query: (params) => {
        return {
          url: `/payment${params}`,
          method: "GET",
        };
      },
      transformResponse: (response: TResponse<TPayment[]>) => response.data,
    }),
  }),
});

export const { useStripePaymentMutation, useProcessPaymentAndBookingMutation ,usePaymentListQuery} =
  paymentApi;
