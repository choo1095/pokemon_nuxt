<template>
    <div class="bg-white h-10 rounded-full flex justify-between  items-center px-6">
        <p class="font-medium text-base text-black ">{{ skillName }}</p>
        <img class="h-5 w-5 bg-blue-900 rounded-full" src="~/assets/img/types/bug.svg" alt="">
    </div>
</template>

<script>
export default {
    name: 'PokemonSkillPill',
    props: {
        skillName: {
            type: String,
            required: true,
        },
    },
}
</script>
