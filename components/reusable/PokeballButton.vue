<template>
    <div>
        <button @click="$emit('onClick')" 
            :class="['bg-white rounded-full h-14 sm:min-w-[100px] flex items-center w-fit', isPokeballOnLeftSide ? 'flex-row-reverse' : '' ]">
            <div :class="['h-5 w-6 bg-img-single', isPokeballOnLeftSide ? 'bg-right-arrow mx-5 sm:mr-5' : 'bg-left-arrow mx-5 sm:ml-5']"></div>
            <p class="hidden sm:block mx-3">{{ title }}</p>
            <div class="hidden sm:block bg-pokeball-outline h-full aspect-square bg-img-single" />
        </button>
    </div>
</template>

<script>

export default {
    name: 'PokeballButton',
    components: {
    },
    props: {
        title: {
            type: String,
            required: true,
        },
        isPokeballOnLeftSide: {
            type: Boolean,
            default: false,
        }
    }
}
</script>
