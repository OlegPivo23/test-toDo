<template>
  <div v-if="isVisible" class="modal-overlay" @click="close" v-esc-close="close">
    <div class="modal-content" @click.stop>
      <button @click="close" class="close-button">X</button>
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { isVisible, closeModal } from '@/composebles/useModal'

function close() {
  closeModal()
}
</script>

<style scoped lang="scss">
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  position: relative;
  background-color: white;
  padding: 40px;
  border-radius: 8px;
  width: 400px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 20px;
  color: #333;
  cursor: pointer;
  font-weight: bold;
}

.close-button:hover {
  color: red;
}
</style>
