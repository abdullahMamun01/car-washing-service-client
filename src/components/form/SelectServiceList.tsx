import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useGetAllServicesQuery } from "@/redux/api/serviceApi";

const SelectServiceList = () => {
  const { data, isLoading } = useGetAllServicesQuery(undefined);
  const { control } = useFormContext(); // Access form context
  const options = data?.map((service) => ({
    service: service._id,
    serviceName: service.name,
  }));
  return (
    <div className="my-4">
      <label
        htmlFor="serviceId"
        className="block mb-2 text-sm font-medium text-gray-700"
      >
        selct service
      </label>

      <Controller
        control={control}
        name="service"
        render={({ field: { onChange, value } }) => (
          <Select value={value} onValueChange={onChange}>
            <SelectTrigger id="serviceId" className="w-full">
              <SelectValue placeholder="select the service" />
            </SelectTrigger>
            <SelectContent>
              {isLoading ? (
                <span>Loading...</span>
              ) : (
                options?.map((option) => (
                  <SelectItem key={option.service} value={option.service}>
                    {option.serviceName}
                  </SelectItem>
                ))
              )}
            </SelectContent>
          </Select>
        )}
      />
    </div>
  );
};

export default SelectServiceList;
