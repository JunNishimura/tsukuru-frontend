<template>
  <base-template>
    <template #content>
      <home-header />
      <div class="home-content">
        <div class="home-content__idea">
          <idea-board :ideas="ideas" />
        </div>
        <div class="home-content__side">
          <tag-board />
        </div>
      </div>
    </template>
  </base-template>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import BaseTemplate from '~/components/templates/BaseTemplate.vue'
import HomeHeader from '~/components/organisms/home/Header.vue'
import IdeaBoard from '~/components/organisms/idea/IdeaBoard.vue'
import TagBoard from '~/components/organisms/tag/TagBoard.vue'
import { ideasSample } from '~/dummy'

export default defineComponent({
  components: {
    BaseTemplate,
    HomeHeader,
    IdeaBoard,
    TagBoard
  },
  setup() {
    const ideas = ideasSample

    return {
      ideas
    }
  }
})
</script>

<style lang="scss" scoped>
.home {
  &-content {
    width: 60%;
    margin: 8rem auto;
    display: flex;
    justify-content: space-between;
    &__idea {
      width: 70%;
    }
    &__side {
      width: 400px;
    }
  }
}
</style>
