import { useGetAllServicesQuery } from "@/redux/api/serviceApi";
import comparisonServiceData from "@/constants/comparison";
import PriceCard from "./PriceCard";
import PriceCardSkeleton from "@/common/skeleton/PriceCardSkeleton";

export default function PriceSection() {
  const { data: services, isLoading } = useGetAllServicesQuery(undefined);

  if (isLoading) {
    return (
      <div className="mt-12 grid gap-8 lg:grid-cols-3 sm:grid-cols-2">
        {[...new Array(3).map(() => <PriceCardSkeleton />)]}
      </div>
    );
  }

  const serviceData = services?.slice(0, 3)?.map((service) => ({
    id: service._id,
    name: service.name,
    duration: service.duration,
    price: service.price,
    features: comparisonServiceData[service.category],
  }));

  return (
    <div className="py-12 bg-sky-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-sky-800 sm:text-4xl">
            Car Wash Pricing
          </h2>
          <p className="mt-4 text-xl text-sky-600">
            Choose the perfect wash for your vehicle
          </p>
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-3 sm:grid-cols-2">
          {serviceData?.map((tier) => (
            <PriceCard
              key={tier.id}
              name={tier.name}
              price={tier.price}
              features={tier.features}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
