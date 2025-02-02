<script setup>
import { ref } from 'vue'
import { addTask } from '@/composebles/useTask'
import BtnComponent from './UI/BtnComponent.vue'
import InputComponent from './UI/InputComponent.vue'

const newTask = ref('')

function handleAdd() {
  if (newTask.value.trim()) {
    addTask(newTask.value.trim())
    newTask.value = ''
  }
}
</script>

<template>
  <form @submit.prevent="handleAdd" class="input-group">
    <InputComponent v-model="newTask" placeholder="Введите задачу" />
    <BtnComponent type="active">Добавить задачу</BtnComponent>
  </form>
</template>

<style scoped lang="scss">
.input-group {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  max-width: 100%;
  width: 100%;
  margin-top: 30px;

  @media (max-width: 565px) {
    flex-direction: column;
  }
}
</style>
