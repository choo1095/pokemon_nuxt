<template>
  <div>
    <Splash v-if="isShowSplashScreen" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Splash from '@/components/Splash.vue';

export default Vue.extend({
  name: 'IndexPage',
  data() {
    return {
      isShowSplashScreen: true,
    }
  },
  components: {
    Splash,
  },
  async created() {
    this.isShowSplashScreen = true;
  },
  async mounted() {
    setTimeout(() => this.isShowSplashScreen = false, 3000);
  }
})
</script>

<style>
</style>
