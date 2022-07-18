<template>
  <div class="auth">
    <auth-header />
    <auth-form />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import AuthHeader from '~/components/organisms/auth/Header.vue'
import AuthForm from '~/components/organisms/auth/Form.vue'

export default defineComponent({
  components: {
    AuthHeader,
    AuthForm
  },
  setup() {

  }
})
</script>
