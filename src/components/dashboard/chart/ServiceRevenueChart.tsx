import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import {
  Area,
  AreaChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { IMonthlyAnalytic } from "@/redux/types/analytic.type";


type TProps = {
  serviceRevenueData: IMonthlyAnalytic[];
};

export default function ServiceRevenueChart({ serviceRevenueData }: TProps) {

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-8">
      <Card className="border-0 shadow-0 ">
        <CardHeader className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
          <div>
            <CardTitle className="text-lg font-semibold">
              <span className="text-blue-600 mr-4">● Total Revenue</span>

            </CardTitle>
            <p className="text-sm text-gray-500">Profit by month</p>
          </div>
          <div className="flex space-x-2 mt-2 sm:mt-0">
            <Button variant="outline" size="sm">
              Day
            </Button>
            <Button variant="outline" size="sm">
              Week
            </Button>
            <Button variant="outline" size="sm">
              Month
            </Button>
          </div>
        </CardHeader>

        <div className="h-[300px] pr-2">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={serviceRevenueData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />

              <Area
                type="monotone"
                dataKey="revenue"
                stroke="hsl(221, 83%, 53%)"
                fill="hsl(221, 83%, 53%)"
                name="service"
                fillOpacity={0.2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </div>
  );
}
