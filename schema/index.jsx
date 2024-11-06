"use client";

import { z } from "zod";

export const contactSchema = z.object({
  fullname: z.string().min(2, "Fullname is required."),
  email: z.string().email({ message: "Please put a valid email address." }),
  message: z.string(),
});
