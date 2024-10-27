import { baseApi } from "@/redux/api/baseApi";

import { TResponse } from "../types";
import { TAnalyticRevenue, TAnalyticStats } from "../types/analytic.type";

const analyticApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    analyticOverview: build.query<TAnalyticStats, undefined>({
      query: () => {
        return {
          url: "/analytics/service-overview",
          method: "GET",
        };
      },

      transformResponse: (response: TResponse<TAnalyticStats>) => response.data,
    }),
    profitAnalytic: build.query<TAnalyticRevenue, undefined>({
      query: () => {
        return {
          url: "/analytics/revenue",
          method: "GET",
        };
      },

      transformResponse: (response: TResponse<TAnalyticRevenue>) => response.data,
    }),
  }),
});

export const { useAnalyticOverviewQuery , useProfitAnalyticQuery } = analyticApi;
