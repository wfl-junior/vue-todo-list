import { prisma } from "~/server/prisma";

export default defineEventHandler(async () => {
  return {
    todos: await prisma.todo.findMany(),
  };
});
