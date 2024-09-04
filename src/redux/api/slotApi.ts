import { baseApi } from "@/redux/api/baseApi";

import { TSlot, TSlotResponse } from "../types/slot.type";

const slotApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    availableSlotList: build.query<TSlot[], string>({
      query: (params) => {
          
        return {
          url: `/slots/availability${params}`,
          method: "GET",
        };
      },
      transformResponse: (response: TSlotResponse) => response.data,
    }),
  }),
});

export const { useAvailableSlotListQuery } = slotApi;
