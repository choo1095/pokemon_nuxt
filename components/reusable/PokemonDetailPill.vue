<template>
    <div class="grid grid-cols-3 rounded-xl w-full h-10 overflow-clip">
        <div class="bg-greyDBDCD7 font-medium text-base center">
            <p>{{ title }}</p>
        </div>
        <div class="col-span-2 bg-white center px-5">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PokemonDetailPill',
    props: {
        title: {
            type: String,
            required: true,
        },
    }
}
</script>
