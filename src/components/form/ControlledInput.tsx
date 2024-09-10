import React, { memo } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { cn } from "@/lib/utils"; // Assuming clx and cn are imported from a utility file
import { Input } from "../ui/input";

type InputType =
  | "text"
  | "email"
  | "password"
  | "checkbox"
  | "number"
  | "url"
  | "phone"
  | "date" 
  | "year"
  

type ControlledInputProps = {
  inputType?: InputType;
  name: string;
  label?: string;
  placeholder?: string;
  className?: string;
  labelColor?: string;
  id?: string;
  disabled?: boolean;
  defaultValue?: string;
};

const ControlledInput: React.FC<ControlledInputProps> = memo(
  ({
    inputType = "text",
    name,
    label,
    placeholder,
    className,
    labelColor,
    id,
    disabled = false,
    defaultValue = "",
  }) => {
    const {
      control,
      formState: { errors },
    } = useFormContext();

    // Improved error message handling
    const getErrorMessage = (error: any) => {
      if (error && typeof error.message === "string") {
        return error.message;
      }
      return null;
    };

    // Define input class based on the state (error/disabled)
    const inputClass = cn("border rounded p-2 w-full", className, {
      "border-red-500": errors[name], // Error state
      "opacity-80 cursor-not-allowed font-bold": disabled, 
    });

    const labelField = label ? (
      <label
        htmlFor={id || name}
        className={cn(
          "block text-sm font-semibold uppercase mb-4",
          labelColor || "text-primary"
        )}
      >
        {label}
      </label>
    ) : null;
    return (
      <div className="mb-4">
        {labelField}
        <Controller
          name={name}
          control={control}
          defaultValue={defaultValue}
          render={({ field }) => {
            const inputProps = {
              id: id || name,
              className: inputClass,
              placeholder,
              disabled,
              ...field,
            };

            // Mapping input types to components
            switch (inputType) {
              case "checkbox":
                return <input type="checkbox" {...inputProps} />;
              default:
                return <Input type={inputType} {...inputProps} />;
            }
          }}
        />
        {errors[name] && (
          <p className="text-red-600 pt-2">{getErrorMessage(errors[name])}</p>
        )}
      </div>
    );
  }
);

export default ControlledInput;
