import CardDataStats from "@/components/dashboard/CardDataStats";
import ServiceAnalytic from "@/components/dashboard/chart/ServiceAnalytic";
import { useAnalyticOverviewQuery } from "@/redux/api/analytic";

import {  Eye, ShoppingCart, Users, Workflow } from "lucide-react";
import React from "react";

export default function OverviewDashboard() {
  const {data , isLoading} = useAnalyticOverviewQuery(undefined)
 
  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
      <CardDataStats title="Total Views" total="coming soon"  levelUp isLoading={isLoading}>
          <Eye className=" dark:fill-white"/>
        </CardDataStats>


        <CardDataStats title="Total Service" total={`${(data?.totalService as number) > 10 ? data?.totalService : '0'+data?.totalService}`}  levelUp isLoading={isLoading}>
          <Workflow className=" dark:fill-white" />
        </CardDataStats>
        <CardDataStats
          title="Total Profit"
          total={`$${data?.totalRevenue}.00`}
          rate="4.35%"
          isLoading={isLoading}
        >
          <ShoppingCart className="dark:fill-white" />
        </CardDataStats>
        <CardDataStats title="Total Users" total={`${data?.totalUser}`}  isLoading={isLoading}>
          <Users className="dark:fill-white" />
        </CardDataStats>
      </div>

      <ServiceAnalytic />
    </>
  );
}
