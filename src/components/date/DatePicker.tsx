import { useEffect, useState } from "react";

import { Calendar } from "@/components/ui/calendar";

import { useParams, useSearchParams } from "react-router-dom";
import { Card } from "../ui/card";
import { useFormContext } from "react-hook-form";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { TooltipProvider } from "@radix-ui/react-tooltip";

import { useAvailableServiceSlotDateQuery } from "@/redux/api/serviceApi";
import { Badge } from "../ui/badge";

export function DatePicker() {
  const [params, setSearchParams] = useSearchParams();
  const paramDate = params.get("date");
  const initialDate = paramDate ? new Date(paramDate) : new Date();

  const [date, setDate] = useState<Date | undefined>(
    isNaN(initialDate.getTime()) ? undefined : initialDate
  );

  useEffect(() => {
    if (date) {
      const month =
        date.getMonth() + 1 < 10
          ? `0${date.getMonth() + 1}`
          : date.getMonth() + 1;
      const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
      const formattedDate = `${date.getFullYear()}-${month}-${day}`;

      setSearchParams({ date: formattedDate });
    }
  }, [date, params]);
  const {
    formState: { errors },
  } = useFormContext();

  const handleSelectDate = (date: Date | undefined) => {
    setDate(date);
  };

  const { serviceId } = useParams();
  console.log(serviceId);
  const { data, isLoading } = useAvailableServiceSlotDateQuery(
    serviceId as string
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const availaleDate = data?.map((date) => new Date(date)) as Date[];
  const days = data?.map((date) => Number(date.split("-")[2]));
  const isDateAvailable = (date: Date): boolean => {
    return availaleDate.some(
      (availableDate) => availableDate.toDateString() === date.toDateString()
    )
  }


  return (
    <Card>
      <Calendar
        className="w-full shadow-md "
        mode="single"
        selected={date}
        onSelect={handleSelectDate}
    
        modifiers={{
          available: availaleDate, 
        }}
        modifiersClassNames={{
          available: "text-sky-700 bg-sky-200 font-bold",
        }}
        classNames={{
          day_selected: "!bg-sky-500 !text-white hover:bg-sky-600 focus:bg-sky-400",
        }}
        initialFocus
        disabled={(date) => !isDateAvailable(date) }
        components={{
          DayContent: ({ date }) => {
            return (
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button type="button">{date.getDate()}</button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>
                      {days?.includes(date.getDate())
                        ? "Available Slot this date"
                        : "Not available now"}
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            );
          },
        }}
      />
    
    <div className="mt-4 space-y-2">
          <div className="flex items-center space-x-2">
            <Badge variant="secondary" className="bg-sky-100 text-sky-600">Available Slot</Badge>
          </div>
          <p className="text-sm text-muted-foreground">
            {date ? (
              <>Selected: {new Date(date).toDateString()}</>
            ) : (
              'Please select an available date'
            )}
          </p>
          <p className="text-sm text-muted-foreground">
            <strong>Note:</strong> Only orange-colored dates are currently available for booking.
          </p>
        </div>

      {errors.slotId && (
        <p className="text-red-500 p-3">slot time is required</p>
      )}
    </Card>
  );
}
