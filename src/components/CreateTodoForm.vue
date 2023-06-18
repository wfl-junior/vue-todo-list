<script setup lang="ts">
  import { api } from "~/lib/axios";
  import { Todo } from "~/types/Todo";

  const title = ref("");
  const todos = useTodos();
  const isLoading = ref(false);

  async function handleAddTodo(event: Event) {
    event.preventDefault();
    isLoading.value = true;

    try {
      const { data } = await api.post<{ todo: Todo }>("/todos", {
        title: title.value,
      });

      todos.value.push(data.todo);
      title.value = "";
    } catch (error) {
      console.error(error);
    } finally {
      isLoading.value = false;
    }
  }
</script>

<template>
  <form
    @submit="handleAddTodo"
    class="flex items-center gap-2 -mt-5 sm:-mt-7 w-full"
  >
    <input
      required
      size="10"
      type="text"
      v-model="title"
      :disabled="isLoading"
      placeholder="Adicione uma nova tarefa"
      class="focus:outline-none h-10 sm:h-14 p-4 border border-app-gray-700 focus:border-app-purple-dark text-app-gray-100 font-normal text-sm sm:text-base placeholder:text-app-gray-300 bg-app-gray-500 rounded-lg flex-1"
    />

    <button
      type="submit"
      :disabled="isLoading"
      class="gap-2 text-white font-bold text-sm h-10 sm:h-14 flex items-center justify-center rounded-lg bg-app-blue-dark p-4 hover:bg-app-blue transition-colors disabled:bg-app-gray-400 disabled:cursor-not-allowed"
    >
      Criar <PlusIcon :size="16" />
    </button>
  </form>
</template>
