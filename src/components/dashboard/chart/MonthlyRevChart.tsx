import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { IYearlyAnalytic } from "@/redux/types/analytic.type";

import {
  Bar,
  BarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

export default function YearlyRevChartByService({revenueData} : {revenueData : IYearlyAnalytic[]}) {
  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white  shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-4">
    <Card className="h-full w-full ">
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          <span>Profit this Year</span>
         
        </CardTitle>
      </CardHeader>

        <div className="h-[300px] w-full pr-2">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={revenueData}>
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="service" fill="hsl(221, 83%, 53%)" />
              <Bar dataKey="revenue" fill="hsl(199, 89%, 48%)" />
            </BarChart>
          </ResponsiveContainer>
        </div>

    </Card>
    </div>
  );
}
