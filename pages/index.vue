<template>
  <div class="blue-meteor-bg pb-20 relative">
    <!-- <Splash v-if="isShowSplashScreen" /> -->
    <!-- <div v-else> -->
      <div class="relative">
        <PokeballSemicircleBackground heightClass="h-[42rem]" />
        <PokemonCarousel 
          class="absolute top-32 left-0 right-0 mx-24" 
          :pokemonList="pokemonList" />
      </div>
      <h1 class="text-blue362056 text-center text-2xl font-medium mt-10 mb-10">SHOP ALL</h1>
      <div class="relative">
        <PokemonPaginatedGrid 
          :class="isLoadingMore ? 'hidden' : ''"
          :pokemonList="pokemonList"
          :maxCount="totalPokemonCount"
          :offset="currentOffset"
          @on-tap-next-page="onTapNextPage" />
        <LoadingIndicator
          :class="['top-0 left-[50%] -translate-x-1/2', isLoadingMore ? 'absolute' : 'hidden']" />
      </div>

      <div 
        :class="['top-16 pt-20 w-screen h-screen flex align-center justify-center bg-white', isLoadingPage ? 'fixed' : 'hidden']">
        <LoadingIndicator2 />
      </div>
      
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
import LoadingIndicator from '@/components/reusable/LoadingIndicator.vue';
import LoadingIndicator2 from '@/components/reusable/LoadingIndicator2.vue';
import { getAllPokemon } from '@/api/pokemon.js';

export default Vue.extend({
  name: 'IndexPage',
  data() {
    return {
      isShowSplashScreen: true,
      pokemonList: [],
      totalPokemonCount: 0,
      currentOffset: 0,
      isLoadingPage: false,
      isLoadingMore: false,
    }
  },
  components: {
    Splash,
    PokeballSemicircleBackground,
    PokemonCarousel,
    PokemonCard,
    PokemonPaginatedGrid,
    LoadingIndicator,
    LoadingIndicator2
  },
  methods: {
    async retrievePokemonList() {
      this.isLoadingMore = true;
      const getAllPokemonsAPI = await getAllPokemon(this.currentOffset);

      this.isLoadingMore = false;

      const pokemonListWithId = getAllPokemonsAPI.results.map(
        (pokemon, index) => ({...pokemon, id: this.pokemonList.length + index+1})
      );
      this.pokemonList.push.apply(this.pokemonList, pokemonListWithId);
      this.totalPokemonCount = getAllPokemonsAPI.count;
      this.currentOffset += getAllPokemonsAPI.results.length;
    },
    onTapNextPage() {
      this.retrievePokemonList()
    }
  },
  async created() {
    this.isShowSplashScreen = true;

    this.retrievePokemonList();
    
  },
  async mounted() {
    setTimeout(() => this.isShowSplashScreen = false, 3000);
  },
})
</script>

<style>
</style>
