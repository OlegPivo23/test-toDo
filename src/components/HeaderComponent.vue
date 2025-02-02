<template>
  <header class="header">
    <div class="container">
      <div class="title">toDo</div>
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  background-color: #1e40af; 
  padding: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 80rem;
    margin: 0 auto;
  }

  .title {
    color: white;
    font-size: 1.25rem;
    font-weight: 600;
  }
}
</style>
