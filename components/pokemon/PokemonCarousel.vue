<template>
  <div>
    <VueSlickCarousel 
      class="w-screen"
      v-if="numberOfItemsToShow > 0"
      v-bind="settings">
        <PokemonCard 
          v-for="i in 16" 
          :key="i"
          :pokemon="{ id: i, name: 'pokachu pokachu pokachu pokachu pokachu pokachu' }"
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
      numberOfItemsToShow: 0,
    }
  },
  computed: {
    settings: function() {
      return {
        "dots": true,
        "focusOnSelect": true,
        "infinite": true,
        "speed": 500,
        "touchThreshold": 5,
        "slidesToShow": this.numberOfItemsToShow,
        "slidesToScroll": this.numberOfItemsToShow,
        "arrows": false,
      }
    }
  },
  methods: {
    setNumberOfItems() {
      const screenWidth = window.innerWidth;
      if (screenWidth > 1024) {
        this.numberOfItemsToShow = 4;
      } if (screenWidth > 768) {
        this.numberOfItemsToShow = 3;
      } else if (screenWidth > 480) {
        this.numberOfItemsToShow = 2;
      } else if (screenWidth > 0) {
        this.numberOfItemsToShow = 1;
      }
    },
    onResize(_) {
      this.setNumberOfItems();
    }
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