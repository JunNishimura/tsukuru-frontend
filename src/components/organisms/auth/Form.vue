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
        <input id="username" v-model="username.value" type="text" placeholder="つくる 太郎" @blur="() => username.isValid = true">
      </div>
      <div class="authForm-group">
        <label for="e-mail">
          メールアドレス
        </label>
        <input id="e-mail" v-model="email.value" type="text" placeholder="tsukuru.taro@example.com" @blur="() => email.isValid = true">
      </div>
      <div class="authForm-group">
        <label for="password">
          パスワード
        </label>
        <input id="password" v-model="password.value" type="password" @blur="() => password.isValid = true">
      </div>
      <div v-if="isSignup" class="authForm-group">
        <label for="passwordConfirm">
          パスワード（再確認）
        </label>
        <input id="passwordConfirm" v-model="passwordConfirm.value" type="password" @blur="() => passwordConfirm.isValid = true">
      </div>
      <div class="authForm-group authForm-button">
        <input type="submit" value="送信">
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, useRoute, reactive } from '@nuxtjs/composition-api'
import { required, email as emailValidator, password as passwordValidator } from '~/helpers/validation'

type InputData = {
  value: string
  isValid: boolean
}

export default defineComponent({
  setup() {
    const route = useRoute()

    const formTitle = route.value.name === 'signup' ? '新規登録' : 'ログイン'
    const isSignup = route.value.name === 'signup'
    const username = reactive<InputData>({
      value: '',
      isValid: false
    })
    const email = reactive<InputData>({
      value: '',
      isValid: false
    })
    const password = reactive<InputData>({
      value: '',
      isValid: false
    })
    const passwordConfirm = reactive<InputData>({
      value: '',
      isValid: false
    })

    const isPasswordMatched = password.value === passwordConfirm.value
    const validateForm = (): void => {
      if (!required(username.value)) {
        username.isValid = false
      }
      if (!(required(email.value) && emailValidator(email.value))) {
        email.isValid = false
      }
      if (!(required(password.value) && passwordValidator(password.value))) {
        password.isValid = false
      }
      if (!(required(passwordConfirm.value) && passwordValidator(passwordConfirm.value) && isPasswordMatched )) {
        passwordConfirm.isValid = false
      }
    }

    const submitForm = (): void => {
      validateForm()

      if (username.isValid && email.isValid && password.isValid && passwordConfirm.isValid) {
        console.log('success')
      } else {
        console.log('fail')
      }
    }

    return {
      formTitle,
      isSignup,
      username,
      email,
      password,
      passwordConfirm,
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
