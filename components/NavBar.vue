<template>
    <div class="w-full bg-primary h-16 px-8 flex content-center justify-between">
        <button class="flex items-center">
            <img src="~/assets/img/pokemon_logo.svg" class="h-12 " />
        </button>

        <div class="flex divide-x-2 items-center">
            <button>login</button>
            <div class="flex">
                <button>sign u</button>
                <IconButtonWithIndicator 
                    :featherIconName="`shopping-cart`"
                />
            </div>    
        </div>
    </div>
</template>

<script>
import IconButtonWithIndicator from '@/components/reusable/IconButtonWithIndicator.vue';

export default {
  components: {
    IconButtonWithIndicator
  },
}
</script>


<style scoped>
button {
    @apply text-white text-sm;
}
</style>