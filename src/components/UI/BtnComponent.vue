<template>
  <button @click="emitClick" :disabled="disabled" :class="['button', buttonClass]">
    <slot />
  </button>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  type: {
    type: String,
    default: 'primary',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['click'])

function emitClick() {
  emit('click')
}

const buttonClass = computed(() => {
  if (props.disabled) {
    return 'disabled'
  }

  return props.type
})
</script>

<style scoped lang="scss">
.button {
  padding: 10px;
  font-size: 16px;
  font-weight: 600;
  color: white;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.button.primary {
  background-color: #6c63ff;
}

.button.primary:hover {
  background-color: #574bff;
}

.button.secondary {
  background-color: #f0f0f0;
  color: #6c63ff;
  border: 2px solid #6c63ff;
}

.button.secondary:hover {
  background-color: #d9d9d9;
}

.button.danger {
  background-color: #ff4f4f;
}

.button.danger:hover {
  background-color: #e04747;
}

.button.active {
  background-color: #4caf50;
}

.button.active:hover {
  background-color: #45a049;
}

.button:disabled {
  background-color: #b5b5b5;
  cursor: not-allowed;
}
</style>
