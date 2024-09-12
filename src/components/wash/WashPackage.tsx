import { useGetSingleServiceQuery } from "@/redux/api/serviceApi";
import { DatePicker } from "../date/DatePicker";
import TakingServiceForm from "../form/TakingServiceForm";
import { useParams } from "react-router-dom";
import SelectServiceName from "../services/SelectServiceName";
import NotFound from "../error/NotFound";

export default function WashPackage() {
  const { serviceId } = useParams();

  const { data, isLoading ,isError} = useGetSingleServiceQuery(serviceId as string);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if(isError){
    return <NotFound />
  }

  return (
    <div>
      <h1 className="text-center text-primary text-4xl mb-4 font-bold">
        Wash Packages
      </h1>
      <h2 className="text-center text-blue-600 text-lg mb-8 ">
        Which wash is the best for your vehicle?
      </h2>

      {/* <div className="grid grid-cols-12 gap-4 mb-4">
        {vehiclesData.map((vh) => (
          <div
            key={vh.name}
            className="col-span-2 border-gray-3 flex flex-col items-center justify-center py-4 px-4 shadow-lg "
          >
            <div className=""> {vh.icon}</div>
            <h6 className="text-xl mt-4 text-sky-500">{vh.name}</h6>
          </div>
        ))}
      </div> */}
      <div className="p-6 shadow-lg ">
        <h1 className="text-3xl font-bold my-4">Take a Booking bellow </h1>
        {data && (
          <SelectServiceName serviceName={data?.name} price={data?.price} />
        )}

        <div className="my-4">
          <DatePicker />
        </div>
        <TakingServiceForm />
      </div>
    </div>
  );
}
