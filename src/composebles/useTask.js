import { ref } from 'vue'

const tasks = ref([])

// Функция для загрузки задач из localStorage
export function getTasks() {
  const savedTasks = localStorage.getItem('tasks')
  tasks.value = savedTasks ? JSON.parse(savedTasks) : []
  return tasks
}

// Добавление задачи
export function addTask(value) {
  const task = { id: Date.now(), value, isCompleted: false }
  tasks.value.push(task)
  localStorage.setItem('tasks', JSON.stringify(tasks.value))
}

// Удаление задачи
export function removeTask(taskId) {
  tasks.value = tasks.value.filter((task) => task.id !== taskId)
  localStorage.setItem('tasks', JSON.stringify(tasks.value))
}

// Обновление задачи
export function updateTask(taskId, newValue) {
  const task = tasks.value.find((task) => task.id === taskId)
  if (task) {
    task.value = newValue
    localStorage.setItem('tasks', JSON.stringify(tasks.value))
  }
}

// Переключение состояния выполнения задачи
export function toggleTaskCompletion(taskId) {
  const task = tasks.value.find((task) => task.id === taskId)
  if (task) {
    task.isCompleted = !task.isCompleted
    localStorage.setItem('tasks', JSON.stringify(tasks.value))
  }
}
