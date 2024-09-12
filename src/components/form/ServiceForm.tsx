import { format } from "date-fns";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import VehicleSelection from "../vehicle/SelectedVehicle";
import ControlledInput from "./ControlledInput";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { DatePicker } from "../date/DatePicker";
import TimeSelector from "../date/TimeSelector";
import { CardFooter } from "../ui/card";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { TVehicleServiceRequest } from "@/schema/schema.type";
import { VehicleServiceRequestSchema } from "@/schema/serviceRequest.schema";
import { Button } from "../ui/button";
import moment from "moment";
import { useAppDispatch } from "@/redux/hooks";
import {
  selectService,
  ServicePayload,
} from "@/redux/features/service/serviceSlice";

type TServiceFormProps = { serviceName: string; price: number };
export default function ServiceForm({ serviceName, price }: TServiceFormProps) {
  const dispatch = useAppDispatch();

  const form = useForm<TVehicleServiceRequest>({
    defaultValues: {},
    resolver: zodResolver(VehicleServiceRequestSchema),
  });

  const { handleSubmit, watch } = form;
  const [searchParams] = useSearchParams();
  const { serviceId } = useParams();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<TVehicleServiceRequest> = (formData) => {
    const serviceData: ServicePayload = {
      ...formData,
      serviceId: serviceId as string,
      bookingDate: searchParams.get("date") as string,
      serviceName: serviceName,
      price: price,
      slotTime: formData.slotTime as string,
    };
    dispatch(selectService(serviceData));
    navigate("/booking");
  };

  const [params] = useSearchParams();
  const watchDate = params.get("date");
  const watchTime = watch("slotTime");

  const slotTime =
    watchTime && moment(watchTime, "hh:mm A").utc().format("HH:mm [UTC]");

  return (
    <FormProvider {...form}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full my-4">
          <VehicleSelection />
        </div>

        <div className=" mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ControlledInput
              className="md:max-w-3xl w-full py-3 px-4 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-purple-500 focus:outline-purple rounded-lg"
              inputType="text"
              name="vehicleModel"
              id="vehicleModel"
              placeholder="enter your vehicleModel"
              label="vehicle Model"
            />
            <ControlledInput
              className="md:max-w-3xl w-full py-3 px-4 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-purple-500 focus:outline-purple rounded-lg"
              inputType="text"
              name="vehicleBrand"
              id="vehicleBrand"
              placeholder="enter your vehicleBrand "
              label="vehicle Brand"
            />

            <ControlledInput
              className="md:max-w-3xl w-fullpy-3 px-4 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-purple-500 focus:outline-purple rounded-lg"
              inputType="year"
              name="manufacturingYear"
              id="manufacturingYear"
              placeholder="enter your manufacturing Year"
              label="manufacturing Year"
            />

            <ControlledInput
              className="md:max-w-3xl w-full py-3 px-4 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-purple-500 focus:outline-purple rounded-lg"
              inputType="text"
              name="registrationPlate"
              id="registrationPlate"
              placeholder="enter your registration Plate"
              label="registration Plate ( Example : ABCD1235)"
            />
          </div>
        </div>

        <Tabs defaultValue="date" className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-blue-100">
            <TabsTrigger
              value="date"
              className="data-[state=active]:bg-sky-600 data-[state=active]:text-white"
            >
              Select Date
            </TabsTrigger>
            <TabsTrigger
              value="time"
              className="data-[state=active]:bg-sky-600 data-[state=active]:text-white"
            >
              Select Time
            </TabsTrigger>
          </TabsList>
          <TabsContent value="date" className="mt-4">
            <div className="text-sm text-red-600 mb-2">* Required</div>

            <DatePicker />
          </TabsContent>
          <TabsContent value="time" className="mt-4">
            <TimeSelector />
          </TabsContent>
        </Tabs>

        <CardFooter className="bg-gray-100 p-6 mt-6">
          <div className="w-full">
            <div className="flex justify-between items-center mb-4">
              <div className="text-sm text-gray-600">
                {watchDate && `Date: ${format(watchDate, "PP")}`}
              </div>
              <div className="text-sm text-gray-600">
                {watchTime && `Time: ${slotTime}`}
              </div>
            </div>
            <Button
              type="submit"
              className="w-full bg-sky-600 hover:bg-sky-500 text-white"
            >
              Book This Service
            </Button>
          </div>
        </CardFooter>
      </form>
    </FormProvider>
  );
}
