<script setup lang="ts">
  const todos = useTodos();
  const completedTodosLength = computed(
    () => todos.value.filter(todo => todo.isCompleted).length,
  );
</script>

<template>
  <div class="flex flex-col gap-6">
    <header class="flex items-center justify-between font-bold">
      <div class="flex items-center gap-2">
        <span class="text-sm text-app-blue">Tarefas criadas</span>

        <span
          class="rounded-full flex items-center justify-center px-2 py-0.5 text-app-gray-200 bg-app-gray-400 text-xs min-w-[1.5rem]"
        >
          {{ todos.length }}
        </span>
      </div>

      <div class="flex items-center gap-2">
        <span class="text-sm text-app-purple">Concluídas</span>

        <span
          class="rounded-full flex items-center justify-center px-2 py-0.5 text-app-gray-200 bg-app-gray-400 text-xs min-w-[1.5rem]"
        >
          {{ completedTodosLength }}
        </span>
      </div>
    </header>

    <EmptyTodos v-if="todos.length === 0" />
    <TodoList v-else />
  </div>
</template>
