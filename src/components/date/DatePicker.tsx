import { useEffect, useState } from "react";

import { Calendar } from "@/components/ui/calendar";

import { useSearchParams } from "react-router-dom";
import { Card } from "../ui/card";
import { useFormContext } from "react-hook-form";

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
        date.getMonth() < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
      const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();

      const formateDate = `${date.getFullYear()}-${month}-${day}`;

      setSearchParams({ date: formateDate });
    }
  }, [date, params]);
  const {
    formState: { errors },
  } = useFormContext();

  const handleSelectDate = (date: Date | undefined) => {
    setDate(date);
  };
  return (
    <Card>
      <Calendar
        className="w-full shadow-md "
        mode="single"
        selected={date}
        onSelect={handleSelectDate}
        classNames={{
          day_selected:
            "bg-blue-600 text-white hover:bg-blue-700 focus:bg-blue-700",
          day_today: "bg-blue-100 text-blue-600 font-bold",
        }}
        initialFocus
      />

      {errors.slotId && (
        <p className="text-red-500 p-3">slot time is required</p>
      )}
    </Card>
  );
}
