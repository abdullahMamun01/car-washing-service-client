import { baseApi } from "@/redux/api/baseApi";

import {
  TCreateSlot,
  TSlot,
  TSlotResponse,
  TSlotStatus,
} from "../types/slot.type";
import { TResponse } from "../types";

type TSlotStatusUpdatePayload = {
  slotId: string;
  slotStatus: TSlotStatus;
};

const slotApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    availableSlotList: build.query<TSlot[], string | undefined>({
      query: (params) => {
        const url = params
          ? `/slots/availability${params}`
          : `/slots/availability`;

        return {
          url,
          method: "GET",
        };
      },
      providesTags: ["Slot"],
      transformResponse: (response: TSlotResponse) => response.data,
    })

    ,
    createSlot: build.mutation<void, TCreateSlot>({
      query: (payload) => {
        return {
          url: `/services/slots`,
          method: "POST",
          body: payload,
        };
      },
      invalidatesTags: ["Slot"],
    }),
    updateSlotStatus: build.mutation<TSlot, TSlotStatusUpdatePayload>({
      query: (payload) => {
        return {
          url: `/slots/${payload.slotId}/updateStatus`,
          method: "PATCH",
          body: { slotStatus: payload.slotStatus },
        };
      },
      invalidatesTags: ["Slot"],
      transformResponse: (response: TResponse<TSlot>) => response.data,
    }),
  }),
});

export const { useAvailableSlotListQuery,useCreateSlotMutation, useUpdateSlotStatusMutation } =
  slotApi;
