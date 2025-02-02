<template>
  <div class="task">
    <div v-if="!filteredTasks.length && searchQuery.trim()">
      <h2 class="text-2xl text-center text-gray-500">Ничего не найдено</h2>
    </div>
    <div v-else-if="!filteredTasks.length" class="empty-tasks">
      <h1 class="text-3xl text-center text-blue-600">Добавьте задачу</h1>
    </div>
    <div v-else class="task-list">
      <div v-for="task in filteredTasks" :key="task.id" class="task-wrapper">
        <p>{{ task.value }}</p>
        <div class="btn-wrapper">
          <BtnComponent
            v-for="(btn, index) in btn"
            :key="index"
            @click="btn.action(task.id)"
            :type="btn.type"
          >
            {{ btn.text }}
          </BtnComponent>
        </div>
      </div>
    </div>
    <Teleport to="body">
      <ModalComponent>
        <div class="flex flex-col gap-4 justify-center items-center">
          <InputComponent v-model="currentTask" placeholder="Введите новое значение задачи" />
          <BtnComponent @click="saveEdit">Изменить</BtnComponent>
        </div>
      </ModalComponent>
    </Teleport>
  </div>
</template>

<script setup>
import { computed, defineProps, ref } from 'vue'
import BtnComponent from './UI/BtnComponent.vue'
import { removeTask, getTasks } from '@/composebles/useTask'
import ModalComponent from './modal/ModalComponent.vue'
import { useTaskModal } from '@/composebles/useTaskModal'
import InputComponent from './UI/InputComponent.vue'

const { openEditModal, saveEdit, currentTask } = useTaskModal()

const btn = ref([
  {
    text: 'Удалить',
    type: 'danger',
    action: removeTask,
  },
  {
    text: 'Изменить',
    type: 'primary',
    action: openEditModal,
  },
])

const props = defineProps({
  searchQuery: String,
})

const tasks = getTasks()

const filteredTasks = computed(() => {
  if (!props.searchQuery.trim()) {
    return tasks.value
  }
  return tasks.value.filter((task) =>
    task.value.toLowerCase().includes(props.searchQuery.toLowerCase()),
  )
})
</script>

<style scoped lang="scss">
.task {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.empty-tasks {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
}

.task-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.task-wrapper {
  background-color: #ffffff;
  padding: 16px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
  transition: box-shadow 0.3s ease;
  flex-wrap: wrap; 
  gap: 12px;

  &:hover {
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
  }

  p {
    word-wrap: break-word;
    margin: 0;
    max-width: 80%;
    font-size: 18px;
    color: #333;
    word-break: break-word;
  }

  .btn-wrapper {
    display: flex;
    gap: 12px;
    justify-content: flex-start;
    align-items: center;
  }

  @media (max-width: 768px) {
    padding: 12px;
    flex-direction: column;
    gap: 8px;

    p {
      font-size: 16px;
      max-width: 100%;
    }

    .btn-wrapper {
      justify-content: center;
      width: 100%;
    }
  }

  @media (max-width: 480px) {
    padding: 10px;

    p {
      font-size: 14px;
    }
  }
}
</style>
