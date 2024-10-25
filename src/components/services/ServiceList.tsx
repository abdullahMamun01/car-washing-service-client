/* eslint-disable @typescript-eslint/no-unused-vars */

import ServiceCard from "./ServiceCard";
import { useGetAllServicesQuery } from "@/redux/api/serviceApi";
import ServiceSkeleton from "./ServiceSkeleton";
import { useLocation } from "react-router-dom";

export default function ServiceList() {
  const location = useLocation();
  const { data, isLoading, isFetching } = useGetAllServicesQuery(
    location.search
  );
  if (isLoading || isFetching) {
    return <ServiceSkeleton length={6} />;
  }

  const transFormServiceData = data?.map(
    ({ createdAt: _, updatedAt: __, _id, ...other }) => ({ id: _id, ...other })
  );
  console.log({transFormServiceData})

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 ">
      {transFormServiceData?.map((service) => (
        <div className="col-span-3" key={service.id}>
          <ServiceCard service={service} />
        </div>
      ))}
    </div>
  );
}
