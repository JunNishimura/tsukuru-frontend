<template>
  <div class="tagBoard">
    <div class="tagBoard-title">
      タグランキング
    </div>
    <div class="tagBoard-ranking">
      <div v-for="(tag, idx) in tags" :key="tag.id" class="tagBoard-ranking__line">
        <div class="tagBoard-ranking__line-left">
          {{ idx+1 }} {{ tag.name}}
        </div>
        <div class="tagBoard-ranking__line-right">
          10 posts
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { tagsSample } from '~/dummy'

export default defineComponent({
  setup() {
    const tags = tagsSample

    return {
      tags
    }
  },
})
</script>

<style lang="scss" scoped>
.tagBoard {
  width: 400px;
  background-color: $colorLightBlue;
  padding: 1.6rem;
  &-title {
    font-size: $fontSize-3;
  }
  &-ranking {
    margin-top: 1.2rem;
    &__line {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid $colorDark;
      & + & {
        margin-top: 1rem;
      }
    }
  }
}
</style>
