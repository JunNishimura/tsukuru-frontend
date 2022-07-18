<template>
  <div class="authForm">
    <div class="authForm-title">
      {{ formTitle }}
    </div>
    <form>
      <div v-if="isSignup" class="authForm-group">
        <label for="username">
          ユーザー名
        </label>
        <input id="username" type="text" placeholder="つくる 太郎">
      </div>
      <div class="authForm-group">
        <label for="e-mail">
          メールアドレス
        </label>
        <input id="e-mail" type="text" placeholder="tsukuru.taro@example.com">
      </div>
      <div class="authForm-group">
        <label for="password-1">
          パスワード
        </label>
        <input id="password-1" type="text">
      </div>
      <div v-if="isSignup" class="authForm-group">
        <label for="password-2">
          パスワード（再確認）
        </label>
        <input id="password-2" type="text">
      </div>
      <div class="authForm-group authForm-button">
        <button>送信</button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, useRoute } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const route = useRoute()

    const formTitle = route.value.name === 'signup' ? '新規登録' : 'ログイン'
    const isSignup = route.value.name === 'signup'

    return {
      formTitle,
      isSignup
    }
  }
})
</script>

<style lang="scss" scoped>
.authForm {
  width: 600px;
  margin: 8rem auto;
  &-title {
    text-align: center;
    font-size: 32px;
    padding: 24px 0;
  }
  &-group {
    font-size: 18px;
    margin: 24px 0;
  }
  &-button {
    margin-top: 80px;
  }
  form {
    label {
      display: block;
    }
    input, button {
      width: 100%;
      height: 48px;
      font-size: 18px;
      border: none;
    }
    input {
      padding-left: 8px;
      background-color: $colorLightBlue;
    }
    button {
      color: #ffffff;
      background-color: $colorGreen;
      cursor: pointer;
      &:hover {
        background-color: lighten($colorGreen, 5%);
      }
      &:active {
        background-color: darken($colorGreen, 5%);
      }
    }
  }
}
</style>
