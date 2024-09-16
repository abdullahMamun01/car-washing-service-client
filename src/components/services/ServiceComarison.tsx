import React, { useState } from "react";
import { Check, X, Droplets, Car, Sparkles, Wind, Brush } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useGetAllServicesQuery } from "@/redux/api/serviceApi";
import comparisonServiceData from "@/constants/comparison";

type TComparisonService = {
  id: string;
  name: string;
  price: number;
  duration: string;
  features: { name: string; included: boolean }[];
};

const featureIcons: { [key: string]: React.ReactNode } = {
  "Exterior Wash": <Droplets className="h-5 w-5 mr-3"/>,
  "Hand Dry": <Wind className="h-5 w-5 mr-3"/>,
  "Wheel Cleaning": <Brush className="h-5 w-5 mr-3"/>,
  "Undercarriage Wash": <Car className="h-5 w-5 mr-3"/>,
  Wax: <Sparkles className="h-5 w-5 mr-3"/>,
  "Interior Vacuum": <Wind className="h-5 w-5 mr-3"/>,
  // Add other feature icons as needed
};

export default function ServiceComparison() {
  const [selectedServices, setSelectedServices] = useState<
    TComparisonService[]
  >([]);
  const { data: services, isLoading } = useGetAllServicesQuery(undefined);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const comparisonSerivices = services?.map((service) => ({
    id: service._id,
    name: service.name,
    duration: service.duration,
    price: service.price,
    features: comparisonServiceData[service.category],
  }));

  const handleServiceSelect = (id: string) => {
    const newService = comparisonSerivices?.find((s) => s.id === id);
    if (newService) {
      setSelectedServices([
        ...selectedServices,
        newService,
      ] as TComparisonService[]);
    }
  };

  const handleServiceRemove = (id: string) => {
    setSelectedServices(selectedServices.filter((s) => s.id !== id));
  };

  return (
    <div className="mx-auto py-4">
      <h1 className="text-2xl text-sky-500 font-bold mb-4">Car Wash Service Comparison</h1>

      <div className="mb-4">
        <Select onValueChange={handleServiceSelect}>
          <SelectTrigger className="w-full sm:w-[300px]">
            <SelectValue placeholder="Select a car wash service to compare" />
          </SelectTrigger>
          <SelectContent>
            {comparisonSerivices?.map((service) => (
              <SelectItem key={service.id} value={service.id}>
                {service.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {selectedServices.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {selectedServices.map((service) => (
            <Card key={service.id} className="flex flex-col">
              <CardHeader>
                <CardTitle className="flex justify-between items-center">
                  {service.name}
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleServiceRemove(service.id!)}
                  >
                    <X className="h-4 w-4 mr-2 text-red-500" />
                    <span className="sr-only">
                      Remove {service.name} from comparison
                    </span>
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-between">
                <div>
                  <p className="text-2xl font-bold">
                    ${service.price?.toFixed(2)}
                  </p>
                  <p className="text-sm ">
                    Duration: {service.duration} minutes
                  </p>
                  <ul className="mt-4 space-y-2">
                    {service.features.map((feature, index) => {
                      const IconComponent =
                        featureIcons[feature.name as keyof typeof featureIcons];
                      return (
                        <li key={index} className="flex items-center">
                          {feature.included ? (
                            <Check className="h-4 w-4 mr-2 text-green-500" />
                          ) : (
                            <X className="h-4 w-4 mr-2 text-red-500" />
                          )}
                          {IconComponent}
                          {feature.name}
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <Button className="mt-4 w-full">Choose {service.name}</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {selectedServices.length === 0 && (
        <p className="text-sky-500 mt-8">
          Select car wash services to compare them side by side.
        </p>
      )}
    </div>
  );
}
