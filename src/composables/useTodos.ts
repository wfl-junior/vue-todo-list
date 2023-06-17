import { Todo } from "~/types/Todo";

export function useTodos() {
  return useState<Todo[]>("todos", () => []);
}
