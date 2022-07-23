<template>
  <div class="authForm">
    <div class="authForm-title">
      {{ formTitle }}
    </div>
    <form @submit.prevent="onSubmit">
      <div v-if="isSignup" class="authForm-group">
        <label for="username">
          ユーザー名
        </label>
        <input id="username" v-model="username.value" type="text" placeholder="つくる 太郎" @blur="() => username.isValid = true">
        <span v-if="!username.isValid" class="authForm-group__alert">ユーザー名が不正です。</span>
      </div>
      <div class="authForm-group">
        <label for="e-mail">
          メールアドレス
        </label>
        <input id="e-mail" v-model="email.value" type="text" placeholder="tsukuru.taro@example.com" @blur="() => email.isValid = true">
        <span v-if="!email.isValid" class="authForm-group__alert">メールアドレスが不正です。</span>
      </div>
      <div class="authForm-group">
        <label for="password">
          パスワード
        </label>
        <input id="password" v-model="password.value" type="password" @blur="() => password.isValid = true">
        <span v-if="!password.isValid" class="authForm-group__alert">パスワードが不正です。</span>
      </div>
      <div v-if="isSignup" class="authForm-group">
        <label for="passwordConfirm">
          パスワード（確認用）
        </label>
        <input id="passwordConfirm" v-model="passwordConfirm.value" type="password" @blur="() => passwordConfirm.isValid = true">
        <span v-if="!passwordConfirm.isValid" class="authForm-group__alert">パスワード確認用が不正です。</span>
        <span v-if="!isPasswordMatched" class="authForm-group__alert">パスワードが合致しません。</span>
      </div>
      <div class="authForm-group authForm-button">
        <input type="submit" value="送信">
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { required, email as emailValidator, password as passwordValidator } from '~/helpers/validation'
import { signup } from '~/api/signup'

export default Vue.extend({
  data() {
    return {
      username: {
        value: '',
        isValid: true
      },
      email: {
        value: '',
        isValid: true
      },
      password: {
        value: '',
        isValid: true
      },
      passwordConfirm: {
        value: '',
        isValid: true
      },
      isPasswordMatched: true
    }
  },
  computed: {
    formTitle() {
      return this.$route.name === 'signup' ? '新規登録': 'ログイン'
    },
    isSignup() {
      return this.$route.name === 'signup'
    }
  },
  methods: {
    validateForm() {
      if (!required(this.username.value)) {
        this.username.isValid = false
      }
      if (!(required(this.email.value) && emailValidator(this.email.value))) {
        this.email.isValid = false
      }
      if (!(required(this.password.value) && passwordValidator(this.password.value))) {
        this.password.isValid = false
      }
      if (!(required(this.passwordConfirm.value) && passwordValidator(this.passwordConfirm.value))) {
        this.passwordConfirm.isValid = false
      }
      this.isPasswordMatched = !!this.password.value && !!this.passwordConfirm.value && this.password.value === this.passwordConfirm.value
    },
    async submitSignupForm() {
      const formData = {
        name: this.username.value,
        email: this.email.value,
        password: this.password.value,
        password_confirmation: this.passwordConfirm.value
      }
      try {
        await signup(this.$axios, formData).then(() => {
          console.log(this.email.value, this.password.value)
        })
        await this.$auth.loginWith('local', {
          data: {
            email: this.email.value,
            password: this.password.value
          }
        })
        this.clearForm()
      } catch {
        console.log('signup error')
      }
    },
    async submitLoginForm() {
      try {
        await this.$auth.loginWith('local', {
          data: {
            email: this.email.value,
            password: this.password.value
          }
        })
        this.clearForm()
      } catch {
      }
    },
    clearForm() {
      this.username.value = ''
      this.username.isValid = true
      this.email.value = ''
      this.email.isValid = true
      this.password.value = ''
      this.password.isValid = true
      this.passwordConfirm.value = ''
      this.passwordConfirm.isValid = true
    },
    onSubmit() {
      this.validateForm()

      if (this.isSignup && this.username.isValid && this.email.isValid && this.password.isValid && this.passwordConfirm.isValid) {
        this.submitSignupForm()
      } else if (!this.isSignup && this.email.isValid && this.password.isValid) {
        this.submitLoginForm()
      }
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
    &__alert {
      color: $colorRed;
    }
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
