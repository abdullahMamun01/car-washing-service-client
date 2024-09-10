import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns"; // Import date-fns for formatting

interface TimePickerProps {
  name: string;
  label?: string;
}

const TimePicker: React.FC<TimePickerProps> = ({ name, label }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext(); // Access form context

  // Function to format the date object to HH:mm string
  const formatTime = (date: Date | null) => {
    return date ? format(date, "HH:mm") : "";
  };
  return (
    <>
      {label && (
        <label htmlFor={name} className="">
          {label}
        </label>
      )}
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value } }) => (
          <DatePicker
            selected={value ? new Date(`1970-01-01T${value}`) : null} // Handle time selection
            onChange={(date) => onChange(formatTime(date as Date))} // Format the selected time
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={60}
            timeFormat="HH:mm"
            dateFormat="HH:mm" // Ensure date format is just time
            className="border border-slate-200 shadow-sm rounded-md p-2 mt-3 focus:border-slate-400 focus:outline-none"
          />
        )}
      />
      {errors[name] && (
        <p className="text-red-600 pt-2">{errors[name].message as string}</p>
      )}
    </>
  );
};

export default TimePicker;
