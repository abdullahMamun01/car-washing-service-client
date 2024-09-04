// import vehicles from "@/constants/vehiclesData";
import { Controller, useFormContext } from "react-hook-form";
import { Label } from "../ui/label";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { Car, Truck, Bike, Bus } from "lucide-react";

const VehicleSelection = () => {
  const {
    watch,
    control,
    formState: { errors },
  } = useFormContext();
  const selectedVehicle = watch("vehicleType");

  const vehicleTypes = [
    { id: "car", name: "Car", icon: Car },
    { id: "truck", name: "Truck", icon: Truck },
    { id: "motorcycle", name: "Motorcycle", icon: Bike },
    { id: "bus", name: "Bus", icon: Bus },
  ];
  return (
    <div className="mb-6">
      <div className="my-4">
        <Label className="text-lg font-semibold  py-5">
          Select Vehicle Type *
        </Label>
      </div>
      <Controller
        name="vehicleType"
        control={control}
        rules={{ required: "Vehicle type is required" }}
        render={({ field }) => (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {vehicleTypes.map((vehicle) => (
              <div key={vehicle.id}>
                <Button
                  type="button"
                  variant="outline"
                  className={cn(
                    "w-full h-24 flex flex-col items-center justify-center gap-2",
                    selectedVehicle === vehicle.id &&
                      "border-blue-600 bg-blue-50 text-blue-600"
                  )}
                  onClick={() => field.onChange(vehicle.id)}
                >
                  <vehicle.icon className="h-8 w-8" />
                  <span>{vehicle.name}</span>
                </Button>
              </div>
            ))}
          </div>
        )}
      />
      {errors?.vehicleType && (
        <p className="text-red-500 text-sm mt-1">
          {errors.vehicleType.message as string}
        </p>
      )}
    </div>
  );
};

export default VehicleSelection;

{
  /* <div key={index} className="relative">
  <input
    className="peer hidden"
    id={`radio_${index}`}
    type="radio"
    value={vehicle.name}
    {...register("vehicleType")}
  />
  <span
    className={`absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 ${
      selectedVehicle === vehicle.name ? "bg-blue-600 border-white" : ""
    }`}
  ></span>
  <label
    className={`flex  h-full cursor-pointer flex-col items-center justify-center rounded-lg p-4 shadow-lg  ${
      selectedVehicle === vehicle.name
        ? "bg-blue-500 text-white "
        : "bg-slate-100 shadow-lg"
    }`}
    htmlFor={`radio_${index}`}
  >
    {vehicle.icon}
    <span className="mt-2 font-medium">{vehicle.name}</span>
  </label>
</div>; */
}

