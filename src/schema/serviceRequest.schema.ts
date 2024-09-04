import { z } from "zod";
export const VehicleServiceRequestSchema = z.object({
  slotId: z.string().length(24, { message: "Invalid slotId length" }),
  vehicleType: z.enum([
    "car",
    "truck",
    "SUV",
    "van",
    "motorcycle",
    "bus",
    "electricVehicle",
    "hybridVehicle",
    "bicycle",
    "tractor",
  ]), // Enumerating expected vehicle types
  vehicleBrand: z.string().min(1, { message: "Vehicle brand cannot be empty" }),
  vehicleModel: z.string().min(1, { message: "Vehicle model cannot be empty" }),
  slotTime: z.string().optional(),
  manufacturingYear: z
    .union([z.string().transform((val) => val && Number(val)), z.number()])
    .refine(
      (val) => {
        const year = Number(val);
        return year >= 1886 && year <= new Date().getFullYear();
      },
      {
        message: "Invalid manufacturing year",
      }
    ),
  registrationPlate: z
    .string()
    .regex(/^[A-Z0-9]{1,8}$/, { message: "Invalid registration plate format" }), // Adjust regex to fit plate format
});
