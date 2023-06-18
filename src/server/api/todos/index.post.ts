import { prisma } from "~/server/prisma";
import { errorHandler } from "~/server/utils/errorHandler";
import { createTodoValidationSchema } from "~/server/validation/create-todo";

export default defineEventHandler(async event => {
  try {
    const body = await readBody(event);
    const { title } = createTodoValidationSchema.parse(body);

    const newTodo = await prisma.todo.create({
      data: {
        title,
        isCompleted: false,
      },
    });

    setResponseStatus(event, 201);

    return {
      todo: newTodo,
    };
  } catch (error) {
    return errorHandler(error, event);
  }
});
