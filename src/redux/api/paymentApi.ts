import { baseApi } from "@/redux/api/baseApi";
import {
  TStripeChecoutResponse,
  StripeCheckoutRequest,
  TStripeResponse,
  TSripeSessionPayload,
} from "../types/payment.type";

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
  }),
});

export const { useStripePaymentMutation, useProcessPaymentAndBookingMutation } =
  paymentApi;
