<template>
    <div class="w-full bg-primary h-16 px-8 flex content-center justify-between">
        <button @click="onTapLogo" class="flex items-center min-w-[100px]">
            <img src="~/assets/img/pokemon_logo.svg" class="h-12 " />
        </button>

        <div class="flex items-center">
            <div v-if="getIsAuthenticated">
                <button class="mr-3 h-max aspect-square bg-circle-account bg-img-single" @click="onTapAccount" />
            </div>

            <div v-else class="flex flex-row">
                <button @click="onTapSignUp">Sign Up</button>
                <div class="h-5 w-[1px] bg-white "></div>
                <button @click="onTapSignIn">Login</button>
            </div>
            
            
            <IconButtonWithIndicator 
                :featherIconName="`shopping-cart`"
                :indicatorValue="1"
                @onClick="onTapCart"
            />    
        </div>
    </div>
</template>

<script>
import IconButtonWithIndicator from '@/components/reusable/IconButtonWithIndicator.vue';
import { mapGetters } from 'vuex'

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
            this.$router.push({
                path: 'cart'
            })
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
        onTapAccount() {
            this.$router.push({
                path: 'profile'
            })
        }
    },
    computed: {
        ...mapGetters({
            getIsAuthenticated: 'user/getIsAuthenticated'
        }),
    },
}
</script>


<style scoped>
button {
    @apply text-white text-sm font-light px-4;
}
</style>