import { z } from "zod";

export const updateProfileSchema = z.object({
  image: z
    .instanceof(FileList)
    .refine((fileList) => fileList.length > 0, {
      message: "Please select a file.",
    })
    .optional(),
  name: z.string({
    required_error: "name is required",
    invalid_type_error: "name must be string",
  }),

  address: z.string({
    required_error: "address is required",
    invalid_type_error: "address must be string",
  }),
  phone: z
    .string({ required_error: "phone number is required" })
    .regex(/^\+?[1-9]\d{1,14}$/, { message: "Invalid phone number format" }),
  role: z.enum(["user", "admin"]).default("user"),
});
