<template>
  <div class="blue-meteor-bg pb-20">
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

<script>
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
  methods: {
    initUserData() {
      if (process.browser) {
        let user = JSON.parse(localStorage.getItem('user'))
        if (user !== null) {
          this.$store.dispatch('user/login', user)
        }
      }
    }
  },
  async created() {
    this.initUserData()
    this.isShowSplashScreen = true;
  },
  async mounted() {
    setTimeout(() => this.isShowSplashScreen = false, 3000);
  },
})
</script>

<style>
</style>
