<template>
  <div class="ideaCard">
    <div class="ideaCard-profile">
      <div class="ideaCard-profile__image">
        <img :src="profileImagePath">
      </div>
      <div class="ideaCard-profile__info">
        <div class="ideaCard-profile__info-name">
          @{{ user.username }}
        </div>
        <div class="ideaCard-profile__info-date">
          {{ idea.post_date }}
        </div>
      </div>
    </div>
    <div class="ideaCard-content">
      <div class="ideaCard-content__title">
        {{ idea.title }}
      </div>
      <div class="ideaCard-content__tag">
        <tag-card
          v-for="tag in tags"
          :key="tag.id"
          :tag="tag"
        />
      </div>
      <div class="ideaCard-content__like">
        
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from '@nuxtjs/composition-api'
import { userSample, tagsSample } from '~/dummy'
import TagCard from '~/components/molecules/tag/TagCard.vue'
import type { Idea } from '~/types/idea'

export default defineComponent({
  components: {
    TagCard
  },
  props: {
    idea: {
      type: Object as () => Idea,
      required: true
    }
  },
  setup() {
    const user = userSample
    const tags = tagsSample
    const profileImagePath = computed(() => {
      return user.profile_image === '' ? require('~/assets/images/profile-dummy.png') : user.profile_image
    })

    return {
      user,
      tags,
      profileImagePath
    }
  }
})
</script>

<style lang="scss" scoped>
.ideaCard {
  padding: 2rem;
  background-color: $colorLightBlue;
  &-profile {
    display: flex;
    justify-content: flex-start;
    &__image {
      width: 5rem;
      img {
        width: 100%;
        border-radius: 50%;
      }
    }
    &__info {
      margin-left: 2rem;
      &-name {
        font-size: 30px;
        margin-bottom: 0.6rem;
      }
      &-date {
        font-size: 20px;
      }
    }
  }
  &-content {
    margin-left: 7rem;
    &__title {
      font-size: $fontSize-3;
    }
    &__tag {
      margin-top: 1rem;
      .tagCard + .tagCard {
        margin-left: 1rem;
      }
    }
  }
}
</style>
