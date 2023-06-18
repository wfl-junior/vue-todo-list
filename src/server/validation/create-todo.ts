import { z } from "zod";

export const createTodoValidationSchema = z.object({
  title: z
    .string({ required_error: "Title is required" })
    .min(1, "Title is required"),
});
