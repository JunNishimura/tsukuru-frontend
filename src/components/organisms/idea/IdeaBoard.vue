<template>
  <div class="ideaBoard">
    <idea-card 
      v-for="idea in ideas" 
      :key="idea.id" 
      :idea="idea"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import IdeaCard from '~/components/molecules/idea/IdeaCard.vue'

export default defineComponent({
  components: {
    IdeaCard
  },
  props: {
    ideas: {
      type: Array,
      required: true
    }
  },
  setup() {

  },
})
</script>
