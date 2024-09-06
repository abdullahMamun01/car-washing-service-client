import { RootState } from "@/redux/store";
import { ServiceRequest, TCarWashService } from "@/redux/types/service.type";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ServicePayload = ServiceRequest & {
  price: number;
  serviceName: string;
  slotTime: string;
  bookingDate: string;
};
type ServiceState = {
  selectService: ServicePayload | null;
  updateService: TCarWashService | null;
  deleteService: { serviceId: string ,serviceName: string} | null;
};
const initialState: ServiceState = {
  selectService: null,
  updateService: null,
  deleteService: null,
};


const serviceSlice = createSlice({
  name: "service",
  initialState,
  reducers: {
    selectService: (state, action: PayloadAction<ServicePayload>) => {
      state.selectService = action.payload;
    },
    updateService: (state, action: PayloadAction<TCarWashService>) => {
      state.updateService = action.payload;
    },
    deleteService: (state, action: PayloadAction<{ serviceId: string,serviceName: string }>) => {
      state.deleteService = action.payload;
    },
    resetSelectService: (state) => {
      state.selectService = null;
    },
    resetUpdateService: (state) => {
      state.updateService = null;
    },
    resetDeleteService: (state) => {
      state.deleteService = null;
    },
    // Reset all service-related states
    resetAllServiceStates: (state) => {
      state.selectService = null;
      state.updateService = null;
      state.deleteService = null;
    },
  },
});

export default serviceSlice.reducer;
export const { selectService,updateService,deleteService, resetUpdateService,resetDeleteService } = serviceSlice.actions;
export const useSelectedSerivce = (state: RootState) =>
  state.service.selectService;

export const useUpdateService = (state: RootState) => state.service.updateService
export const useDeleteService = (state: RootState) => state.service.deleteService

