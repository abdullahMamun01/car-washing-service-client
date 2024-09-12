import { cn } from "@/lib/utils";
import { useAvailableSlotListQuery } from "@/redux/api/slotApi";
import { useFormContext, Controller } from "react-hook-form";
import { useLocation, useParams } from "react-router-dom";
import { Button } from "../ui/button";

const TimeSelector: React.FC = () => {
  const {
    control,
    setValue,
    formState: { errors },
    watch,
  } = useFormContext();


  const watchTime = watch("slotId");

  const handleSlotSelect = (slot: {
    slotId: string;
    time: string;
    slotDate: string;
  }) => {

    setValue("slotId", slot.slotId);
    setValue("bookingDate", slot.slotDate);
    setValue("slotTime", slot.time);
  };
  const location = useLocation();
  const {serviceId} = useParams()
  const date = location.search || new Date().toDateString();

  const { data, isLoading, isFetching } = useAvailableSlotListQuery(`${date}&serviceId=${serviceId}`);

  if (isLoading || isFetching) {
    return <div>Loading...</div>;
  }
  const timeSlots = data?.map((slot) => ({
    slotId: slot._id,
    time: slot.startTime,
    slotDate: slot.date,
    booked: slot.isBooked === 'booked'
  }));

  return (
    <div className="mb-4">
      <h2 className="text-xl font-bold mb-4">Select a time</h2>
      {timeSlots && timeSlots?.length > 0 ? (
        <Controller
          name="slotId"
          control={control}
          rules={{ required: "Please select a time" }}
          render={({ field }) => (
            <div className="mt-4 grid grid-cols-4 gap-2 lg:max-w-xl my-4">
              {timeSlots?.map((slot) => (
                <Button
                  {...field}
                  key={slot.slotId}
                  type="button"
                  variant={watchTime === slot.slotId ? "default" : "outline"}
                  onClick={() => handleSlotSelect(slot)}
                  disabled={slot.booked} 

                  className={cn(
                    "w-full",
                    watchTime === slot.slotId
                      ? "bg-sky-600 hover:bg-sky-500"
                      : "hover:border-skys-600 hover:text-blue-600"
                  )}
                >
                  {slot.time} 
                </Button>
     
              ))}
            </div>
          )}
        />
      ) : (
        <div>
          <h1 className="text-xl text-sky-500">
            Sorry, no available slots for this date. Please check other dates
            for availability.
          </h1>
        </div>
      )}
      {errors.slotId && (
        <p className="text-red-500">{errors.slotId.message as string}</p>
      )}
    </div>
  );
};

export default TimeSelector;
