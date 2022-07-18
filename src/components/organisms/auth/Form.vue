<template>
  <div class="authForm">
    <div class="authForm-title">
      {{ formTitle }}
    </div>
    <form @submit.prevent="submitForm">
      <div v-if="isSignup" class="authForm-group">
        <label for="username">
          ユーザー名
        </label>
        <input id="username" v-model="formData.username" type="text" placeholder="つくる 太郎">
      </div>
      <div class="authForm-group">
        <label for="e-mail">
          メールアドレス
        </label>
        <input id="e-mail" v-model="formData.email" type="text" placeholder="tsukuru.taro@example.com">
      </div>
      <div class="authForm-group">
        <label for="password-1">
          パスワード
        </label>
        <input id="password-1" v-model="formData.password1" type="password">
      </div>
      <div v-if="isSignup" class="authForm-group">
        <label for="password-2">
          パスワード（再確認）
        </label>
        <input id="password-2" v-model="formData.password2" type="password">
      </div>
      <div class="authForm-group authForm-button">
        <input type="submit" value="送信">
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, useRoute, reactive } from '@nuxtjs/composition-api'

type FormData = {
  username: string
  email: string
  password1: string
  password2: string
}

export default defineComponent({
  setup() {
    const route = useRoute()

    const formTitle = route.value.name === 'signup' ? '新規登録' : 'ログイン'
    const isSignup = route.value.name === 'signup'
    const formData = reactive<FormData>({
      username: '',
      email: '',
      password1: '',
      password2: ''
    })

    const submitForm = () => {
      console.log(formData)
    }

    return {
      formTitle,
      isSignup,
      formData,
      submitForm
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
    input[type="submit"] {
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
