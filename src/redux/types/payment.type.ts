import { TResponse } from ".";

type StripeCheckoutRequest = {
  name: string;
  description: string;
  price: number;
  serviceId: string;
  slotId: string;
  vehicleType: string;
  vehicleBrand: string;
  vehicleModel: string;
  manufacturingYear: number;
  registrationPlate: string;
};

type TStripeChecoutResponse = {
  sessionUrl: string;
  sessionId: string;
};

type TStripeResponse = TResponse<TStripeChecoutResponse>;
type TSripeSessionPayload = {
  session_id : string
}


export type { StripeCheckoutRequest, TStripeResponse, TStripeChecoutResponse ,TSripeSessionPayload};
