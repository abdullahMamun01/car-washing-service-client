import { TResponse } from ".";
import { TCarWashServiceDataResponse } from "./service.type";

export type TSlot = {
  _id: string;
  service: TCarWashServiceDataResponse;
  date: string;
  startTime: string;
  endTime: string;
  isBooked: string;
  createdAt: string;
  updatedAt: string;
};

export type TSlotResponse = TResponse<TSlot[]>


