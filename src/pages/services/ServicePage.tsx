import Breadcrumb3 from "@/components/Breadcrumbs/Breadcrumb";
import ServiceCard from "@/components/services/ServiceCard";
import ServiceFilter from "@/components/services/ServiceFilter";
import ServiceSkeleton from "@/components/services/ServiceSkeleton";
import { useGetAllServicesQuery } from "@/redux/api/serviceApi";

export default function ServicePage() {
  const { data, isLoading } = useGetAllServicesQuery(undefined);
  if (isLoading) {
    return <ServiceSkeleton length={6}/>;
  }

  const transFormServiceData = data?.map(
    ({ createdAt: _, updatedAt: __, _id, ...other }) => ({id:_id, ...other  })
  );

  return (
    <div className="px-5 md:px-20 py-5">
      <Breadcrumb3 />
      <div>
        <h2 className="mb-8 text-4xl lg:text-5xl text-primary text-center font-bold font-heading">
          Our Serivice Available!
        </h2>
      </div>
      <div className="mb-8">
        <ServiceFilter/>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 ">
        {transFormServiceData?.map((service) => (
          <div className="col-span-3" key={service.id}>
            <ServiceCard service={service} />
          </div>
        ))}

      
      </div>
    </div>
  );
}
