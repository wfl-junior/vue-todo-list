import { ZodError } from "zod";
import { formatZodErrors } from "./formatZodErrors";

export function errorHandler(error: unknown, event: any) {
  if (error instanceof ZodError) {
    setResponseStatus(event, 422);

    return {
      errors: formatZodErrors(error),
    };
  }

  setResponseStatus(event, 500);

  return {
    message: "Houston, we have a problem.",
  };
}
