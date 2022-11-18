<template>
    <div class="mx-[10%]">
        <div class="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-4 gap-10 ">
            <PokemonCard 
                v-for="pokemon in displayedPokemonList" 
                :key="pokemon.id"
                :pokemon="pokemon"
            />
        </div>
    
        <ProgressBar 
            class="mt-12"
            :progress="progressBar"/>

        <div class="flex justify-between mt-12">
            <PokeballButton 
                @onClick="onTapPreviousPage"
                title="Previous pokemanz"/>
            <PokeballButton 
                @onClick="onTapNextPage"
                :isPokeballOnLeftSide="true"
                title="More pokemanz"/>
        </div>
    </div>
</template>

<script>
import PokemonCard from '@/components/pokemon/PokemonCard.vue'
import ProgressBar from '@/components/reusable/ProgressBar.vue'
import PokeballButton from '@/components/reusable/PokeballButton.vue'
import { POKEMON_PER_PAGE } from '@/constants/';

export default {
    name: 'PokemonPaginatedGrid',
    components: {
        PokemonCard,
        ProgressBar,
        PokeballButton,
    },
    data() {
        return {
            totalPokemonList: [],
            currentOffset: 0,
            totalLoadedOffset: 0,
        }
    },
    props: {
        pokemonList: {
            type: Array,
            required: true,
        },
        maxCount: {
            type: Number,
            required: true,
        },
        offset: {
            type: Number,
            required: true,
        },
    },
    computed: {
        displayedPokemonList() {
            if (this.totalPokemonList.length === 0) {
                return [];
            } else if (this.currentOffset > POKEMON_PER_PAGE) {
                console.log(`POKEMON PER PAGE ${POKEMON_PER_PAGE}`)
                console.log(`currentOffset ${currentOffset}`)
                return this.totalPokemonList.slice(currentOffset - POKEMON_PER_PAGE, currentOffset);
            } else {
                return this.totalPokemonList;
            }
        },
        progressBar() {
            return this.currentOffset / this.maxCount;
        }
    },
    watch: {
        pokemonList(value) {
            this.totalPokemonList = value;
        },
        offset(value) {
            this.totalLoadedOffset = value;
            this.currentOffset = value;
        }
    },
    methods: {
        onTapNextPage() {
            this.$emit('on-tap-next-page');
        },
        onTapPreviousPage() { 
            if (this.currentOffset === this.totalLoadedOffset) {
                this.$emit('on-tap-previous-page');
            } else {
                this.currentOffset - POKEMON_PER_PAGE;
            }
            
        },
    },
}

</script>