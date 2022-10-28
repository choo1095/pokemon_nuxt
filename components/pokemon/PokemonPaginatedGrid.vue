<template>
    <div class="grid grid-cols-4 gap-10 mx-[10%] ">
        <PokemonCard 
          v-for="i in 16" 
          :key="i"
          :pokemon="{ id: i, name: 'pokachu pokachu pokachu pokachu pokachu pokachu' }"
          />
    </div>
</template>

<script lang="ts">
import PokemonCard from '@/components/pokemon/PokemonCard.vue'

export default {
    name: 'PokemonPaginatedGrid',
    components: {
        PokemonCard,
    },
    props: {
        pokemonList: {
            type: Array,
            required: true,
        }
    },
}

</script>