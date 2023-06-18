import { prisma } from "~/server/prisma";
import { errorHandler } from "~/server/utils/errorHandler";

export default defineEventHandler(async event => {
  try {
    const id = event.context.params!.id;
    await prisma.todo.delete({
      where: { id },
    });

    setResponseStatus(event, 204);
    return {};
  } catch (error) {
    return errorHandler(error, event);
  }
});
