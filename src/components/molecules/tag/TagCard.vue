<template>
  <div class="tagCard">
    {{ tag.name }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import type { Tag } from '~/types/tag'

export default defineComponent({
  props: {
    tag: {
      type: Object as () => Tag,
      required: true
    }
  }
})
</script>

<style lang="scss" scoped>
.tagCard {
  background-color: #fff;
  display: inline-block;
  padding: 0.6rem 1rem;
  border-radius: 4px;
  font-size: $fontSize-1;
}
</style>
