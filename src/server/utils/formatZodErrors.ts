import type { ZodError } from "zod";

export function formatZodErrors(error: ZodError) {
  return error.errors.reduce<Record<string, string>>((errors, error) => {
    errors[String(error.path)] = error.message;
    return errors;
  }, {});
}
