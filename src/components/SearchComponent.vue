<template>
  <div class="search-component">
    <InputComponent
      :modelValue="modelValue"
      type="text"
      placeholder="Поиск..."
      @update:modelValue="updateSearch"
      
    />
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'
import InputComponent from './UI/InputComponent.vue'

const props = defineProps({
  modelValue: String,
})

const emit = defineEmits(['update:modelValue'])

const updateSearch = (value) => {
  emit('update:modelValue', value)
}
</script>

<style lang="scss" scoped>
.search-component{
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
}
</style>