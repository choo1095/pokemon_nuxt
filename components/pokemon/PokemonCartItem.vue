<template>
    <div class="mb-7 bg-white shadow-md  md:rounded-lg h-44 md:h-56 p-0 md:pl-14 md:pt-4 md:pr-9 md:pb-4 flex flex-row overflow-clip">
        <img class="h-full aspect-square object-cover" 
            :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${cartItem.pokemon.id}.png`"
            />
        <div class="ml-3 md:ml-14 h-full w-full relative">
            <div class="flex flex-col">
                <p class="mt-5">#{{ cartItem.pokemon.id }}</p>
                <p class="font-medium text-2xl mb-3">{{ pokemonName }}</p>
                <StepperButtons 
                    @onUpdateValue="onUpdateQuantity"
                    :initialValue="cartItem.quantity" />
            <button 
                @click="$emit('onClickRemove')"
                class="w-10 h-10 top-0 right-0 absolute bg-bin bg-no-repeat bg-center bg-[length:20px]" />
            <p class="bottom-3 right-5 md:bottom-0 md:right-0 absolute font-medium text-2xl">{{ price }}</p>
        </div>
        </div>
    </div>
</template>

<script>
import StepperButtons from '@/components/reusable/StepperButtons.vue'
import { POKEMON_PRICE } from "@/constants/";

export default {
    name: 'PokemonCartItem',
    props: {
        cartItem: {
            type: Object,
            required: true,
        },
    },
    components: {
        StepperButtons,
    },
    methods: {
        onUpdateQuantity(newQuantity) {
            this.$emit('onUpdateQuantity', newQuantity)
        },
    },
    computed: {
        pokemonName() {
            const name = this.cartItem.pokemon.name;
            return this.$capitalizeFirstLetter(name);
        },
        price() {
            return `RM ${(this.cartItem.quantity * POKEMON_PRICE).toFixed(2)}`;
        }
    }
}
</script>

<style scoped>

</style>