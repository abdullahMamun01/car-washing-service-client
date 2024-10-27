import { cn } from '@/lib/utils';
import React, { ReactNode } from 'react';


interface CardDataStatsProps {
  title: string;
  total: string;
  rate?: string;
  levelUp?: boolean;
  levelDown?: boolean;
  children: ReactNode;
  isLoading?: boolean;
}

const CardDataStats: React.FC<CardDataStatsProps> = ({
  title,
  total,
  children,
  isLoading = false,
}) => {
  return (
    <div className={cn("rounded-md border border-stroke bg-white p-6 shadow-md dark:border-strokedark dark:bg-boxdark")}>
      {/* Icon with skeleton */}
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
        {isLoading ? (
          <div className="skeleton h-8 w-8 rounded-full"></div>
        ) : (
          children
        )}
      </div>

      <div className="mt-4 flex items-end justify-between">
        <div>
          {/* Total with skeleton */}
          {isLoading ? (
            <div className="skeleton h-6 w-20 mb-2 rounded-md"></div>
          ) : (
            <h4 className="text-lg font-bold text-black dark:text-white">
              {total}
            </h4>
          )}

          {/* Title with skeleton */}
          {isLoading ? (
            <div className="skeleton h-4 w-16 rounded-md"></div>
          ) : (
            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
              {title}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardDataStats;
