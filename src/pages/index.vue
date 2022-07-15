<template>
  <nav-bar />
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import NavBar from '~/components/NavBar.vue'

export default defineComponent({
  components: {
    NavBar
  },
  setup() {

  }
})
</script>

<style lang="scss" scoped>
</style>
