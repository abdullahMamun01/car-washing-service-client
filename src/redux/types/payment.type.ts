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

type TPayment = {
  _id: string;
  booking: string;
  service: {
    _id: string;
    name: string;
    price: number;
  };
  paymentIntentId: string;
  paymentMethod: string;
  paymentStatus: string;
  paymentDate: string;
  isProcessed: boolean;
  createdAt: string;
  updatedAt: string;
  user: {
    _id: string;
    name: string;
  };
}


export type { StripeCheckoutRequest,TPayment, TStripeResponse, TStripeChecoutResponse ,TSripeSessionPayload};
