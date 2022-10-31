<template>
    <div class="relative">
        <div class="bg-white w-full rounded-full h-2.5"></div>
        <img src="~/assets/img/pikachu_thumb.svg"
            :class="['absolute bottom-0 w-14']"
            :style="`margin-left: ${leftPosition}`">
    </div>
</template>

<script>
export default {
    name: 'ProgressBar',
    props: {
        progress: {
            type: Number, 
            required: true,
        }
    },
    computed: {
        leftPosition() {
            const percentage = this.progress * 100;
            return `max(0px, calc(${percentage}% - 56px))`;
        }
    }

}
</script>
