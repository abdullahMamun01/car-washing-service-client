import { Skeleton } from "../ui/skeleton";


const ServiceCardSkeleton = () => (
  <div className="max-w-sm bg-white rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <Skeleton className="w-full h-[200px] rounded-t-lg" />
    <div className="p-5">
      <Skeleton className="mb-2 h-8 w-3/4 rounded" />
      <Skeleton className="mb-3 h-4 w-full rounded" />
      <div className="flex justify-between mt-4">
        <Skeleton className="text-primary text-md flex items-center gap-1 my-3 w-1/3 h-4 rounded" />
        <Skeleton className="text-primary text-xl flex items-center w-1/4 h-6 rounded" />
      </div>
      <div className="mt-3">
        <Skeleton className="w-full h-10 rounded-lg" />
      </div>
    </div>
  </div>
);

export default ServiceCardSkeleton;
