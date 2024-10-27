export type TAnalyticStats = {
  totalRevenue: number;
  totalUser: number;
  totalService: number;
};

export interface TAnalyticOverview {
  service?: string;
  revenue: number;
}

export interface IMonthlyAnalytic extends TAnalyticOverview {
  month: string;
}

export interface IYearlyAnalytic extends TAnalyticOverview {
  year: number;
}

export type TAnalyticRevenue = {
  monthlyRevenueData: IMonthlyAnalytic[];

  yearlyRevenueData: IYearlyAnalytic[];
};
