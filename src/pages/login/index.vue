<template>
  <auth-template />
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import AuthTemplate from '~/components/templates/auth/index.vue'

export default defineComponent({
  components: {
    AuthTemplate
  }
})
</script>
