import { ref } from 'vue'

export const isVisible = ref(false)

export function toggleVisible() {
  isVisible.value = !isVisible.value
}

export function openModal() {
  isVisible.value = true
}

export function closeModal() {
  isVisible.value = false
}
