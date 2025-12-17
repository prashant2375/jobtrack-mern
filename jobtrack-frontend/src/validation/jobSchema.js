import { z } from "zod";

export const jobSchema = z.object({
  company: z.string().min(2, "Company name must be at least 2 characters"),
  role: z.string().min(2, "Role must be at least 2 characters"),
  status: z.string(),
  date: z.string().min(1, "Date is required"),
});
