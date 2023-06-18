import { prisma } from "~/server/prisma";
import { errorHandler } from "~/server/utils/errorHandler";

export default defineEventHandler(async event => {
  try {
    const id = event.context.params!.id;
    let todo = await prisma.todo.findUniqueOrThrow({
      where: { id },
    });

    todo = await prisma.todo.update({
      where: { id },
      data: {
        isCompleted: todo.isCompleted,
      },
    });

    setResponseStatus(event, 200);

    return {
      todo,
    };
  } catch (error) {
    return errorHandler(error, event);
  }
});
