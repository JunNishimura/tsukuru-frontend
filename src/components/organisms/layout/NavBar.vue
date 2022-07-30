<template>
  <div class="navbar">
    <div class="navbar-upper">
      <tk-link
        to="/"
      >
        <div class="navbar-upper__icon">
          <img src="~/assets/images/tsukuru-logo.png">
        </div>
      </tk-link>
      <template v-if="isLoggedIn">
        <div class="navbar-upper__item logout navbar-upper__itemLeft" @click="onLogout">
          ログアウト
        </div>
        <div class="navbar-upper__item">
          投稿する
        </div>
        <div class="navbar-upper__item">
          プロフィール
        </div>
      </template>
      <template v-else>
        <div class="navbar-upper__item navbar-upper__itemLeft">
          <tk-link
            to="/signup"
          >
            新規登録
          </tk-link>
        </div>
        <div class="navbar-upper__item">
          <tk-link
            to="login"
          >
            ログイン
          </tk-link>
        </div>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import TkLink from '~/components/atoms/TkLink.vue'

export default {
  components: {
    TkLink
  },
  computed: {
    isLoggedIn() {
      return this.$auth.loggedIn
    }
  },
  methods: {
    onLogout() {
      console.log('login: ', this.$store.state.auth.loggedIn)
      console.log('user: ', this.$auth.user)
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  width: 100%;
  background-color: $colorDarkBlue;
  color: #ffffff;
  &-upper {
    margin: 0 auto;
    width: 60%;
    height: 80px;
    display: flex;
    align-items: center;
    &__icon {
      width: 200px;
      display: flex;
      align-items: center;
      img {
        margin: 8px 0;
        width: 100%;
      }
    }
    &__itemLeft {
      margin-left: auto;
    }
    &__item {
      padding-left: 24px;
    }
  }
  .logout {
    cursor: pointer;
  }
}
</style>
