<template>
    <div class="w-full bg-primary h-16 px-8 flex content-center justify-between">
        <button class="flex items-center">
            <img src="~/assets/img/pokemon_logo.svg" class="h-12 " />
        </button>

        <div class="flex divide-x-2 items-center">
            <button @click="onTapSignUp">Sign Up</button>
            <div class="flex">
                <button @click="onTapLogin">Login</button>
                <IconButtonWithIndicator 
                    :featherIconName="`shopping-cart`"
                    :indicatorValue="1"
                    @onClick="onTapCart"
                />
            </div>    
        </div>
    </div>
</template>

<script>
import IconButtonWithIndicator from '@/components/reusable/IconButtonWithIndicator.vue';

export default {
    components: {
        IconButtonWithIndicator,
    },
    methods: {
        onTapCart() {
            alert('no');
        },
        onTapSignUp() {
            alert('sign up');
        },
        onTapLogin() {
            alert('login');
        }
    },
}
</script>


<style scoped>
button {
    @apply text-white text-sm font-light px-4;
}
</style>