export default {
  mounted(el, binding) {
    const closeModal = binding.value

    function handleKeyDown(event) {
      if (event.key === 'Escape' || event.keyCode === 27) {
        closeModal()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    el._handleKeyDown = handleKeyDown
  },

  unmounted(el) {
    document.removeEventListener('keydown', el._handleKeyDown)
  },
}
