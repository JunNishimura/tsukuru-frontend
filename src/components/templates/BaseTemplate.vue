<template>
  <div class="template">
    <nav-bar />
    <div class="content">
      <slot name="content" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import NavBar from '~/components/organisms/layout/NavBar.vue'

export default defineComponent({
  components: {
    NavBar
  }
})
</script>

<style lang="scss" scoped>
.template {
  height: 100vh;
}
</style>
