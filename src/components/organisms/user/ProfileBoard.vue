<template>
  <div class="profileBoard">
    <div class="profileBoard-image">
      <img :src="profileImagePath">
    </div>
    <div class="profileBoard-username">
      {{ user.username }}
    </div>
    <div class="profileBoard-info">
      <div class="profileBoard-info__line">
        <div class="profileBoard-info__line-left">
          メールアドレス
        </div>
        <div class="profileBoard-info__line-right">
          {{ user.email }}
        </div>
      </div>
      <div class="profileBoard-info__line">
        <div class="profileBoard-info__line-left">
          職業
        </div>
        <div class="profileBoard-info__line-right">
          {{ user.occupation }}
        </div>
      </div>
      <div class="profileBoard-info__line">
        <div class="profileBoard-info__line-left">
          所属
        </div>
        <div class="profileBoard-info__line-right">
          {{ user.organization }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from '@nuxtjs/composition-api'
import type { User } from '~/types/user'

export default defineComponent({
  props: {
    user: {
      type: Object as () => User,
      required: true
    }
  },
  setup(props) {
    const profileImagePath = computed(() => {
      return props.user.profile_image === '' ? require('~/assets/images/profile-dummy.png') : props.user.profile_image
    })

    return {
      profileImagePath
    }
  },
})
</script>


<style lang="scss" scoped>
.profileBoard {
  font-size: $fontSize-2;
  width: 600px;
  padding: 4rem;
  background-color: $colorLightBlue;
  &-image {
    widows: 100%;
    height: 30rem;
    padding: 2rem;
    position: relative;
    img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
    }
  }
  &-username {
    font-size: $fontSize-3;
    text-align: center;
    padding: 1rem 0;
  }
  &-info {
    &__line {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #000;
      margin-top: 1.25rem;
    }
  }
}
</style>
