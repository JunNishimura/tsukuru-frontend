<template>
  <div class="homeHeader">
    <div class="homeHeader-container">
      <div class="homeHeader-container__item">
        タイムライン
      </div>
      <div class="homeHeader-container__item">
        トレンド
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.homeHeader {
  width: 100%;
  background-color: $colorDarkBlue;
  color: #ffffff;
  &-container {
    margin: 0 auto;
    width: 60%;
    height: 80px;
    display: flex;
    align-items: center;
    &__item + &__item {
      padding-left: 24px;
    }
  }
}
</style>
