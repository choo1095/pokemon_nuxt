<template>
    <div class="w-full bg-primary h-16 px-8 flex content-center justify-between">
        <button @click="onTapLogo" class="flex items-center">
            <img src="~/assets/img/pokemon_logo.svg" class="h-12 " />
        </button>

        <div class="flex divide-x-2 items-center">
            <button @click="onTapSignUp">Sign Up</button>
            <div class="flex">
                <button @click="onTapSignIn">Login</button>
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
        onTapLogo() {
            this.$router.push({
                path: '/'
            })
        },
        onTapCart() {
            alert('no');
        },
        onTapSignIn() {
            this.$router.push({
                path: 'signin'
            })
        },
        onTapSignUp() {
            this.$router.push({
                path: 'signup'
            })
        },
    },
}
</script>


<style scoped>
button {
    @apply text-white text-sm font-light px-4;
}
</style>