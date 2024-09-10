import { z } from "zod";

export const createSlotSchema = z.object({
    service: z.string().min(1, "Service is required"),
    date: z.string().min(1, "Date is required"),
    startTime: z.string().min(1, "Start time is required"),
    endTime: z.string().min(1, "End time is required"),
  });