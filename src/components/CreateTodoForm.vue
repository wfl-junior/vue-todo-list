<script setup lang="ts">
  const title = ref("");
  const todos = useTodos();

  function handleAddTodo(event: Event) {
    event.preventDefault();

    todos.value.push({
      title: title.value,
      isCompleted: false,
      id: Date.now().toString(),
    });

    title.value = "";
  }
</script>

<template>
  <form
    @submit="handleAddTodo"
    class="flex items-center gap-2 -mt-5 sm:-mt-7 w-full"
  >
    <input
      size="10"
      type="text"
      v-model="title"
      placeholder="Adicione uma nova tarefa"
      class="focus:outline-none h-10 sm:h-14 p-4 border border-app-gray-700 focus:border-app-purple-dark text-app-gray-100 font-normal text-sm sm:text-base placeholder:text-app-gray-300 bg-app-gray-500 rounded-lg flex-1"
    />

    <button
      type="submit"
      class="gap-2 text-white font-bold text-sm h-10 sm:h-14 flex items-center justify-center rounded-lg bg-app-blue-dark p-4 hover:bg-app-blue transition-colors"
    >
      Criar <PlusIcon :size="16" />
    </button>
  </form>
</template>
