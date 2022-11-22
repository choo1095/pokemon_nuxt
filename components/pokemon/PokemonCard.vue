<template>
    <div>
        <nuxt-link :to="`pokemon/${this.pokemon.id}`" class="shadow-md flex items-center justify-center flex-col bg-cardBg rounded-xl my-3 mx-auto w-[16rem] h-[21rem] p-5 overflow-clip ">
            <img :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`" class="aspect-square object-cover" />
            <h2 class="mt-3 text-xl ">#{{ pokemon.id }}</h2>
            <h3 class="text-xl text-center line-clamp-1 ">{{ pokemonName }}</h3>
        </nuxt-link>
    </div>
</template>

<script>
export default {
    name: 'PokemonCard',
    props: {
        pokemon: {
            type: Object,
            required: true,
        }
    },
    methods: {

    },
    computed: {
        pokemonName() {
            const name = this.pokemon.name;
            return this.$capitalizeFirstLetter(name);
        }
    }
}

</script>