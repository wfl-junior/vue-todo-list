import { prisma } from "~/server/prisma";
import { errorHandler } from "~/server/utils/errorHandler";

export default defineEventHandler(async event => {
  try {
    const id = event.context.params!.id;
    const todo = await prisma.todo.update({
      where: { id },
      data: {
        isCompleted: false,
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
