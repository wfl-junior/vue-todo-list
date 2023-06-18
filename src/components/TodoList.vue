<script setup lang="ts">
  import { api } from "~/lib/axios";
  import { Todo } from "~/types/Todo";

  const todos = useTodos();
  let abortController = new AbortController();

  function handleToggleTodo(index: number, id: Todo["id"]) {
    abortController.abort();
    abortController = new AbortController();

    const todo = todos.value[index];
    todo.isCompleted = !todo.isCompleted;

    let url = `/todos/${id}/complete`;

    if (!todo.isCompleted) {
      url += "/undo";
    }

    api
      .patch(url, undefined, { signal: abortController.signal })
      .catch(console.error);
  }

  function handleDeleteTodo(index: number, id: Todo["id"]) {
    todos.value.splice(index, 1);
    api.delete(`/todos/${id}`).catch(console.error);
  }
</script>

<template>
  <div class="flex flex-col gap-3">
    <div
      v-for="(todo, index) in todos"
      class="p-4 flex items-start gap-3 bg-app-gray-500 rounded-lg"
      :class="{
        'border-app-gray-400': !todo.isCompleted,
        'border-app-gray-500': todo.isCompleted,
      }"
    >
      <button
        :id="todo.id"
        @click="handleToggleTodo(index, todo.id)"
        class="w-5 aspect-square rounded-full border transition-colors text-white flex items-center justify-center"
        :class="{
          'border-app-blue': !todo.isCompleted,
          'border-app-purple-dark bg-app-purple-dark': todo.isCompleted,
        }"
      >
        <CheckIcon v-if="todo.isCompleted" :size="12" />
      </button>

      <label
        :for="todo.id"
        class="text-sm text-left flex-1 break-all leading-snug font-normal transition-all cursor-pointer"
        :class="{
          'text-app-gray-100': !todo.isCompleted,
          'text-app-gray-300 line-through': todo.isCompleted,
        }"
      >
        {{ todo.title }}
      </label>

      <button
        @click="handleDeleteTodo(index, todo.id)"
        class="text-app-gray-300 hover:text-app-danger transition-colors"
      >
        <TrashIcon :size="24" />
      </button>
    </div>
  </div>
</template>
