<template>
  <base-template>
    <template #content>
      <div class="profile">
        <div class="profile-sidebar">
          <profile-board :user="user" />
        </div>
        <div class="profile-content">
          <div class="profile-content__title">
            <div class="profile-content__title-post">
              投稿済み
            </div>
            <div class="profile-content__title-edit">
              編集中
            </div>
          </div>
          <idea-board :ideas="ideas" />
        </div>
      </div>
    </template>
  </base-template>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import BaseTemplate from '~/components/templates/BaseTemplate.vue'
import ProfileBoard from '~/components/organisms/user/ProfileBoard.vue'
import IdeaBoard from '~/components/organisms/idea/IdeaBoard.vue'
import { userSample, ideasSample } from '~/dummy'

export default defineComponent({
  components: {
    BaseTemplate,
    ProfileBoard,
    IdeaBoard
  },
  setup() {
    const user = userSample
    const ideas = ideasSample

    return {
      user,
      ideas,
    }
  },
})
</script>

<style lang="scss" scoped>
.profile {
  width: 60%;
  margin: 10rem auto 0;
  display: flex;
  &-sidebar {
    width: 600px;
  }
  &-content {
    width: 100%;
    margin-left: 4rem;
    &__title {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      font-size: $fontSize-3;
      border-bottom: 1px solid $colorDark;
      &-post, &-edit {
        padding: 1rem;
      }
    }
  }
}
</style>
