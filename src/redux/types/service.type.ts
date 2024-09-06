import { BaseEntity, TResponse } from ".";

type TCarWashService = {
  id?: string;
  name: string; // The name of the service
  description: string; // A brief description of the service
  price: number; // The price of the service (assumed to be in a currency unit)
  duration: number; // The duration of the service in minutes
  isDelted?: boolean;
};

type ServiceRequest = {
  serviceId: string;
  slotId: string;
  vehicleType: string;
  vehicleBrand: string;
  vehicleModel: string;
  manufacturingYear: number;
  registrationPlate: string;
};

type TCarWashServiceDataResponse = TCarWashService & BaseEntity;
type TCarWashServiceResponse = TResponse<TCarWashServiceDataResponse>;

export type {
  TCarWashService,
  TCarWashServiceResponse,
  TCarWashServiceDataResponse,
  ServiceRequest,
};
