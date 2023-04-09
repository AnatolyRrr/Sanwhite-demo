<template>
  <div>
    <div class="container">
      <div class="container__fill not-found">
        <h1>404</h1>
        <h2>Ошибка! Страница не найдена</h2>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.not-found {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  height: calc(100vh - 205px);
  text-align: center;

  @include MIN_768 {
    height: calc(100vh - 256px);
  }
}
</style>