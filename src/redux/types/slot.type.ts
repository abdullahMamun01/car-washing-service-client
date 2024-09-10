import { TResponse } from ".";
import { TCarWashServiceDataResponse } from "./service.type";


export type TCreateSlot = {
  service: string
  date: string
  startTime: string
  endTime: string
}

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
export type TSlotStatus = "avaialbe" | "unavailable";
export type TSlotResponse = TResponse<TSlot[]>;
