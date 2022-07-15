<template>
  <div class="navbar">
    <div class="navbar-container">
      <div class="navbar-upper">
        <div class="navbar-upper__icon">
          <img src="~/assets/images/tsukuru-logo.png">
        </div>
        <template v-if="isLoggedIn">
          <div class="navbar-upper__item navbar-upper__itemLeft">
            投稿する
          </div>
          <div class="navbar-upper__item">
            プロフィール
          </div>
        </template>
        <template v-else>
          <div class="navbar-upper__item navbar-upper__itemLeft">
            サインアップ
          </div>
          <div class="navbar-upper__item">
            ログイン
          </div>
        </template>
      </div>
      <div class="navbar-lower">
        <div class="navbar-lower__item">
          タイムライン
        </div>
        <div class="navbar-lower__item">
          トレンド
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const isLoggedIn = true

    return {
      isLoggedIn
    }
  },
})
</script>

<style lang="scss" scoped>
.navbar {
  width: 100%;
  background-color: $colorDarkBlue;
  color: #ffffff;
  &-upper {
    margin: 0 auto;
    width: 80%;
    height: 80px;
    display: flex;
    align-items: center;
    &__icon {
      width: 200px;
      display: flex;
      align-items: center;
      img {
        margin: 8px 0;
        width: 100%;
      }
    }
    &__itemLeft {
      margin-left: auto;
    }
    &__item {
      padding-left: 24px;
    }
  }
  &-lower {
    margin: 0 auto;
    width: 80%;
    height: 80px;
    display: flex;
    align-items: flex-end;
    &__item {
      padding: 0 24px 8px 0;
      height: fit-content;
    }
  }
}
</style>
