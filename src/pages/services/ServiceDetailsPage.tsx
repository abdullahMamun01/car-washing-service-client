import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { BadgeCheck, Info } from "lucide-react";

import carWahsData from "@/constants/data";

import ServiceForm from "@/components/form/ServiceForm";
import ServiceHeader from "@/components/services/ServiceHeader";
import { useParams } from "react-router-dom";
import { useGetSingleServiceQuery } from "@/redux/api/serviceApi";
import NotFound from "@/components/error/NotFound";
import ServicePageSkeleton from "@/common/skeleton/ServicePageSkeleton";
import comparisonServiceData from "@/constants/comparison";

// Mock data
const serviceDetails = {
  id: 1,
  name: "Premium Wash",
  description:
    "Our premium wash includes exterior wash, wax, interior vacuum, and dashboard cleaning.",
  price: 49.99,
  duration: 60, // in minutes
  location: "123 Main St, Anytown, USA",
  image: "/placeholder.svg?height=400&width=800",
};

export default function SingleService() {
  const vehicle = carWahsData;
  const { serviceId } = useParams();
  const { data, isLoading, isError } = useGetSingleServiceQuery(
    serviceId as string
  );
  if (isLoading) {
    return <ServicePageSkeleton />;
  }
  if (isError) {
    return <NotFound />;
  }

  return (
    <div className="md:container mx-auto p-4 bg-gray-50">
      <Card className="w-full mx-auto overflow-hidden shadow-lg">
        <div className="relative h-48 md:h-64">
          <img
            src={vehicle[0].images[0]}
            alt={serviceDetails.name}
            className="w-full h-full object-cover"
          />
          {/* header */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-4 left-4 text-white">
            <h1 className="text-2xl md:text-3xl font-bold">{data?.name}</h1>
            <p className="text-sm md:text-base mt-2 max-w-md line-clamp-3 text-gray-3">
              {data?.description}
            </p>
          </div>
        </div>

        <ServiceHeader
          price={data?.price as number}
          duration={data?.duration as number}
        />
        <CardContent className="p-6">
          <ServiceForm
            price={data?.price as number}
            serviceName={data?.name as string}
          />
        </CardContent>
      </Card>

      <Card className="w-full mx-auto mt-6 shadow-lg">
        <CardHeader className="bg-sky-600 text-white">
          <CardTitle className="flex items-center">
            <Info className="w-5 h-5 mr-2" />
            Additional Information
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <p className="text-gray-700">
            Our Premium Wash service is designed to give your car a thorough
            cleaning inside and out. We use high-quality, eco-friendly products
            to ensure your vehicle looks its best while minimizing environmental
            impact. Our experienced team pays attention to every detail, leaving
            your car spotless and refreshed.
          </p>
          <ul className="list-disc list-inside mt-4 text-gray-700">
            {data && comparisonServiceData[data?.category].map((feature,i) => (
              feature.included && <li key={i} className="flex gap-2 mb-2"> <BadgeCheck  className="text-green-500 mr-2"/> { feature.name}</li>
            ))}
      
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
