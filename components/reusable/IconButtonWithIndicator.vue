<template>
    <div class="relative h-fit">
        <button v-html="$feathericons[featherIconName].toSvg()" class="feather m-1"></button>
        <div v-if="indicatorValue > 0" 
            class="w-3.5 h-3.5 bg-yellow-500 absolute top-0.5 right-0 rounded-full flex items-center justify-center">
            <p class="text-darkBlue text-xss flex items-center justify-center ">{{ indicatorValue }}</p>
        </div>
    </div>
    
</template>

<script lang="ts">

export default {
    name: 'IconButtonWithIndicator',
    props: {
        featherIconName: {
            type: String, 
            required: true,
        },
        indicatorValue: {
            type: Number,
            required: false,
        }
    },
}

</script>