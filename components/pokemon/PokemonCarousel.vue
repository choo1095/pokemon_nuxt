<template>
  <div>
    <VueSlickCarousel 
      class="w-full"
      v-if="slicedPokemonList.length > 0"
      v-bind="settings">
        <PokemonCard 
          v-for="pokemon in slicedPokemonList" 
          :key="pokemon.id"
          :pokemon="pokemon"
          />
    </VueSlickCarousel>
    <div v-else></div>
  </div>
</template>
 
<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

import PokemonCard from '@/components/pokemon/PokemonCard.vue';

export default {
  name: 'PokemonCarousel',
  components: { 
    VueSlickCarousel,
    PokemonCard
  },
  data() { 
    return {
      numberOfItemsToShowBasedOnWindowSize: 0,
      slicedPokemonList: [],
    }
  },
  props: {
    pokemonList: {
      type: Array,
      required: true,
    },
  },
  computed: {
    settings: function() {
      return {
        "dots": true,
        "focusOnSelect": true,
        "infinite": true,
        "speed": 500,
        "touchThreshold": 5,
        "slidesToShow": this.numberOfSlides,
        "slidesToScroll": this.numberOfSlides,
        "arrows": true,
      }
    },
    numberOfSlides() {
      if (this.pokemonList.length === 0) return 0;
      return this.numberOfItemsToShowBasedOnWindowSize;
    },
    returnSlicedPokemonList() {
      if (this.pokemonList.length === 0) return [];
      return this.pokemonList.slice(0, 16)
    }
  },
  watch: {
    pokemonList() {
      this.slicedPokemonList = this.returnSlicedPokemonList
    }
  },
  methods: {
    setNumberOfItems() {
      const screenWidth = window.innerWidth;
      if (screenWidth > 1280) { // xl
        this.numberOfItemsToShowBasedOnWindowSize = 4;
      } else if (screenWidth > 1024) { // lg 
        this.numberOfItemsToShowBasedOnWindowSize = 3;
      } else if (screenWidth > 768) { // md
        this.numberOfItemsToShowBasedOnWindowSize = 2;
      } else if (screenWidth > 0) {
        this.numberOfItemsToShowBasedOnWindowSize = 1;
      }
    },
    onResize(_) {
      this.setNumberOfItems();
    },
  },
  mounted() {
    this.setNumberOfItems()

    window.addEventListener('resize', this.onResize)
  },
  unmounted() {
    window.removeEventListener('resize', this.onResize)
  }
}
</script> 