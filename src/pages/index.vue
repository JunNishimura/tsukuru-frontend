<template>
  <nav-bar />
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import NavBar from '~/components/organisms/NavBar.vue'

export default defineComponent({
  components: {
    NavBar
  }
})
</script>

<style lang="scss" scoped>
</style>
