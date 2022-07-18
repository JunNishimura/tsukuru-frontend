<template>
  <div class="authHeader">
    <div class="authHeader-container">
      <tk-link
        to="/"
      >
        <div class="authHeader-container__icon">
          <img src="~/assets/images/tsukuru-logo.png">
        </div>
      </tk-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import TkLink from '~/components/atoms/TkLink.vue'

export default defineComponent({
  components: {
    TkLink
  }
})
</script>


<style lang="scss" scoped>
.authHeader {
  width: 100%;
  background-color: $colorDarkBlue;
  color: #ffffff;
  &-container {
    width: 80%;
    height: 80px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    &__icon {
      width: 200px;
      display: flex;
      align-items: center;
      img {
        width: 100%;
      }
    }
  }
}
</style>
