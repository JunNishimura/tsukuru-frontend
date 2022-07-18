<template>
  <div class="tkLink">
    <nuxt-link
      :to="to"
    >
      <slot />
    </nuxt-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    to: {
      type: String,
      default: null,
      required: true
    }
  }
})
</script>

<style lang="scss" scoped>
.tkLink {
  a {
    color: #ffffff;
    text-decoration: none;
    &:hover {
      color: darken(#ffffff, 15%);
    }
  }
}
</style>
