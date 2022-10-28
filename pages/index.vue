<template>
  <div class="w-screen h-fit bg-screenBgBlue bg-meteor-bg">
    <!-- <Splash v-if="isShowSplashScreen" /> -->
    <!-- <div v-else> -->
      <div class="relative">
        <PokeballSemicircleBackground heightClass="h-[42rem]" />
        <PokemonCarousel 
          class="absolute top-32 left-0 right-0 mx-24" />
      </div>
      <h1 class="text-blue362056 text-center text-2xl font-medium mt-10 mb-10">SHOP ALL</h1>
      <PokemonPaginatedGrid 
        :pokemonList="[]"/>
    <!-- </div> -->
  </div>
</template> 

<script lang="ts">
import Vue from 'vue'
import Splash from '@/components/Splash.vue';
import PokeballSemicircleBackground from '@/components/reusable/PokeballSemicircleBackground.vue';
import PokemonCarousel from '@/components/pokemon/PokemonCarousel.vue'
import PokemonCard from '@/components/pokemon/PokemonCard.vue';
import PokemonPaginatedGrid from '@/components/pokemon/PokemonPaginatedGrid.vue';

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
    PokemonCard,
    PokemonPaginatedGrid,
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
