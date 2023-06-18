export default defineNuxtPlugin(async () => {
  const todos = useTodos();
  const data = await $fetch("/api/todos");
  todos.value = data.todos;
});
