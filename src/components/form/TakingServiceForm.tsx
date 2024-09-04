import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import TimeSelector from "../date/TimeSelector";
import VehicleSelection from "../vehicle/SelectedVehicle";
import ControlledInput from "./ControlledInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { VehicleServiceRequestSchema } from "@/schema/serviceRequest.schema";
import { useAppDispatch } from "@/redux/hooks";
import {
  selectService,
  ServicePayload,
} from "@/redux/features/service/serviceSlice";
import { useNavigate, useParams } from "react-router-dom";

// type ServiceRequest = {
//   slotId: string;
//   vehicleType: string;
//   vehicleBrand: string;
//   vehicleModel: string;
//   manufacturingYear: number;
//   registrationPlate: string;
// };

type TakingServiceFormProps = {
  price: number;
  serviceName: string;
};

export default function TakingServiceForm({
  price,
  serviceName,
}: TakingServiceFormProps) {
  const dispatch = useAppDispatch();

  const form = useForm<ServicePayload>({
    defaultValues: {
      vehicleType: "car",
    },
    resolver: zodResolver(VehicleServiceRequestSchema),
  });

  const selectedTime = form.watch("slotId");
  const { serviceId } = useParams();

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<ServicePayload> = (formData) => {
    const data = {
      ...formData,
      serviceId: serviceId as string,
      price,
      slotItme: formData.slotTime,
      bookingDate: formData.bookingDate,
      serviceName,
    };
    console.log(data);
    dispatch(selectService(data));
    navigate("/booking");
  };
  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="">
        <TimeSelector />

        {selectedTime && (
          <>
            <VehicleSelection />
            <ControlledInput
              className="md:max-w-3xl w-full py-3 px-4 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-purple-500 focus:outline-purple rounded-lg"
              inputType="text"
              name="vehicleModel"
              id="vehicleModel"
              placeholder="enter your vehicleModel"
              label="vehicleModel"
            />
            <ControlledInput
              className="md:max-w-3xl w-full py-3 px-4 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-purple-500 focus:outline-purple rounded-lg"
              inputType="text"
              name="vehicleBrand"
              id="vehicleBrand"
              placeholder="enter your vehicleBrand "
              label="vehicleBrand"
            />

            <ControlledInput
              className="md:max-w-3xl w-fullpy-3 px-4 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-purple-500 focus:outline-purple rounded-lg"
              inputType="year"
              name="manufacturingYear"
              id="manufacturingYear"
              placeholder="enter your manufacturing Year"
              label="manufacturingYear"
            />

            <ControlledInput
              className="md:max-w-3xl w-full py-3 px-4 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-purple-500 focus:outline-purple rounded-lg"
              inputType="text"
              name="registrationPlate"
              id="registrationPlate"
              placeholder="enter your registration Plate"
              label="registrationPlate"
            />
          </>
        )}
  
        <button className="mt-8 w-56 rounded-full  bg-blue-600 px-10 py-2 text-md font-bold text-white transition hover:translate-y-1">
          Book Now
        </button>
      </form>
    </FormProvider>
  );
}
