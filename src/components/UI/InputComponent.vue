<template>
  <div class="relative">
    <label v-if="label" :for="id" class="block text-sm font-medium text-gray-700 mb-1">
      {{ label }}
    </label>
    <input
      :id="id"
      v-bind="$attrs"
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      :disabled="disabled"
      @input="updateValue"
      :style="{ width: width || '100%' }"
      class="input-component"
    />
    <p v-if="error" class="text-xs text-red-500 mt-1">{{ errorMessage }}</p>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: '',
  },
  id: {
    type: String,
    default: '',
  },
  label: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    default: 'text',
  },
  placeholder: {
    type: String,
    default: '',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  error: {
    type: Boolean,
    default: false,
  },
  errorMessage: {
    type: String,
    default: 'Это поле обязательно',
  },
  width: {
    type: [String, Number],
    default: '100%',
  },
})

const emit = defineEmits(['update:modelValue'])

function updateValue(event) {
  emit('update:modelValue', event.target.value)
}
</script>

<style scoped lang="scss">
.input-component {
  border: 1px solid #6c63ff;
  border-radius: 5px;
  padding: 8px 16px;
  max-height: 38px;

  &::placeholder {
    font-weight: 500;
    font-size: 16px;
    line-height: 100%;
    color: #c3c1e5;
  }
}

@media (min-width: 1024px) {
  .input-component {
    width: 700px;
  }
}
</style>
