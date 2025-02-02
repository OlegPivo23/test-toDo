import { ref } from 'vue'
import { updateTask } from './useTask'
import { isVisible } from './useModal'

export function useTaskModal() {
  const currentTask = ref('')
  const editingIndex = ref(null)

  function openEditModal(index, task) {
    editingIndex.value = index
    currentTask.value = task
    isVisible.value = true
  }

  function saveEdit() {
    if (editingIndex.value !== null && currentTask.value.trim()) {
      updateTask(editingIndex.value, currentTask.value.trim())
      isVisible.value = false
    }
  }

  return {
    currentTask,
    editingIndex,
    openEditModal,
    saveEdit,
  }
}
