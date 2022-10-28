<template>
    <div :class="[`${heightClass}`,'background bg-semicircle-bg bg-[length:200%] max-h-[700px] min-h-[300px] w-screen']">
        <div class="bg-pokemon-ball-center w-36 h-36 bg-contain absolute -top-16 left-0 right-0 mx-auto bg-no-repeat"></div>
    </div>
</template>

<script lang="ts">

export default {
    props: {
        heightClass: {
            type: String,
            required: false,
            default: '',
        },
    },
}

</script>

<style scoped>
.background {
    /* background-size: 175%; */
    background-repeat: no-repeat;
    background-position: bottom;
}
</style>