<template>
    <div>
        <div class="shadow-md flex items-center justify-center flex-col bg-cardBg rounded-xl my-3 mx-auto w-[259px] h-[341px] p-5">
            <img src="~/assets/img/placeholder_image.png" class="aspect-square object-cover" />
            <h2 class="mt-3 text-xl ">#{{ pokemon.id }}</h2>
            <h3 class="text-xl text-center line-clamp-1 ">{{ pokemon.name }}</h3>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: 'PokemonCard',
    props: {
        pokemon: {
            type: Object,
            required: true,
        }
    },
}

</script>