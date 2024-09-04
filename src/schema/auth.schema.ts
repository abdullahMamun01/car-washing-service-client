import { z } from "zod";

const registerSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email format"),
  phone: z.string().min(1, "Phone number is required"), // Adjust validation based on phone number format if needed
  address: z.string().min(1, "Address is required"),
  password: z.string().min(6, "Password must be at least 6 characters long")
});

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long")
});


export {registerSchema,loginSchema}