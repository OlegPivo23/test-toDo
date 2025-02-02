<template>
  <div class="flex flex-col gap-5">
    <InputGroupComponent />
    <SearchComponent v-model="searchQuery" />
    <TasksComponent :searchQuery="searchQuery" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import InputGroupComponent from './InputGroupComponent.vue'
import TasksComponent from './TasksComponent.vue'
import SearchComponent from './SearchComponent.vue'

const searchQuery = ref('')
</script>
