import { Todo as PrismaTodo } from "@prisma/client";

export type Todo = Omit<PrismaTodo, "createdAt" | "updatedAt"> & {
  createdAt: string;
  updatedAt: string;
};
