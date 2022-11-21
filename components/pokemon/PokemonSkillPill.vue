<template>
    <div class="bg-white h-10 rounded-full flex justify-between  items-center px-6">
        <p class="font-medium text-base text-black ">{{ moveName }}</p>
        <PokemonTypePill 
            :type="moveType"/>
    </div>
</template>

<script>
import PokemonTypePill from '@/components/pokemon/PokemonTypePill.vue';

export default {
    name: 'PokemonSkillPill',
    components: {
        PokemonTypePill,
    },
    props: {
        move: {
            type: Object,
            required: true,
        },
    },
    computed: {
        moveName() {
            const move = this.move.name;
            return this.$capitalizeFirstLetter(this.$replaceDashesWithSpaces(move));
        },
        moveType() {
            return this.move.type.name;
        }
    }
}
</script>
