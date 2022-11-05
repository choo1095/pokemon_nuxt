<template>
    <div class="mx-[10%]">
        <div class="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-4 gap-10 ">
            <PokemonCard 
                v-for="i in 16" 
                :key="i"
                :pokemon="{ id: i, name: 'pokachu pokachu pokachu pokachu pokachu pokachu' }"
            />
        </div>
        
        <!-- mx-3 mt-12  -->
        <ProgressBar 
            class="mt-12"
            :progress="2/3"/>

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

<script lang="ts">
import PokemonCard from '@/components/pokemon/PokemonCard.vue'
import ProgressBar from '@/components/reusable/ProgressBar.vue'
import PokeballButton from '@/components/reusable/PokeballButton.vue'

export default {
    name: 'PokemonPaginatedGrid',
    components: {
        PokemonCard,
        ProgressBar,
        PokeballButton,
    },
    props: {
        pokemonList: {
            type: Array,
            required: true,
        }
    },
    methods: {
        onTapNextPage() {
            alert('next page');
        },
        onTapPreviousPage() {
            alert('previous page');
        },
    }
}

</script>