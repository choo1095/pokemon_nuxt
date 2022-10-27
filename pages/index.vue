<template>
  <div class>
    <!-- <Splash v-if="isShowSplashScreen" /> -->
    <!-- <div v-else> -->
      <div class="relative">
        <PokeballSemicircleBackground heightClass="h-[675px]" />
        <PokemonCarousel 
          class="absolute top-32 left-0 right-0 mx-0" />
      </div>
      <div class="-mt-24  w-screen h-[1000px] bg-screenBgBlue bg-meteor-bg"></div>
      
    <!-- </div> -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Splash from '@/components/Splash.vue';
import PokeballSemicircleBackground from '@/components/reusable/PokeballSemicircleBackground.vue';
import PokemonCarousel from '@/components/pokemon/PokemonCarousel.vue'

export default Vue.extend({
  name: 'IndexPage',
  data() {
    return {
      isShowSplashScreen: true,
    }
  },
  components: {
    Splash,
    PokeballSemicircleBackground,
    PokemonCarousel,
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
