import React from "react";
import ServiceRevenueChart from "./ServiceRevenueChart";

import { useProfitAnalyticQuery } from "@/redux/api/analytic";
import { IMonthlyAnalytic } from "@/redux/types/analytic.type";
import YearlyRevChartByService from "./MonthlyRevChart";

export default function ServiceAnalytic() {
  const { data, isLoading } = useProfitAnalyticQuery(undefined);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  const groupedMonthlyRevenue = data?.monthlyRevenueData.reduce<
    Record<string, IMonthlyAnalytic >
  >((acc, curr) => {
    if (acc[curr.month]) {
      acc[curr.month] = { month: curr.month, revenue : curr.revenue + acc[curr.month].revenue };
    } else {
      acc[curr.month] ={ month: curr.month, revenue : curr.revenue }; ;
    }
    return acc;
  }, {});



  const transformedMonthlyRevenue = Object.values(groupedMonthlyRevenue as {[key:string] : IMonthlyAnalytic})
  return (
    <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
      <ServiceRevenueChart serviceRevenueData={transformedMonthlyRevenue} />
      {data && <YearlyRevChartByService revenueData={data?.yearlyRevenueData } />}
    </div>
  );
}


/* 
 {
month: Jan   , revenue : 20
month:Feb, revenue: 40
 }

*/