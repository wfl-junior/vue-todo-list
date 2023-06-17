<script setup lang="ts">
  const todos = useTodos();

  function handleToggleTodo(index: number) {
    const todo = todos.value[index];
    todo.isCompleted = !todo.isCompleted;
  }

  function handleDeleteTodo(event: Event, index: number) {
    event.stopPropagation();
    todos.value.splice(index, 1);
  }
</script>

<template>
  <div class="flex flex-col gap-3">
    <div
      v-for="(todo, index) in todos"
      @click="handleToggleTodo(index)"
      class="p-4 flex items-start gap-3 cursor-pointer border-app-gray-400 bg-app-gray-500 rounded-lg"
    >
      <div
        class="w-5 aspect-square rounded-full border transition-colors text-white flex items-center justify-center"
        :class="{
          'border-app-blue': !todo.isCompleted,
          'border-app-purple-dark bg-app-purple-dark': todo.isCompleted,
        }"
      >
        <CheckIcon v-if="todo.isCompleted" :size="12" />
      </div>

      <p
        class="text-sm flex-1 break-all leading-snug font-normal transition-all"
        :class="{
          'text-app-gray-100': !todo.isCompleted,
          'text-app-gray-300 line-through': todo.isCompleted,
        }"
      >
        {{ todo.title }}
      </p>

      <button
        @click="event => handleDeleteTodo(event, index)"
        class="text-app-gray-300 hover:text-app-gray-200 transition-colors"
      >
        <TrashIcon />
      </button>
    </div>
  </div>
</template>
