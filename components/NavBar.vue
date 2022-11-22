<template>
    <div class="w-full bg-primary h-16 px-8 flex content-center justify-between">
        <nuxt-link to="/" class="flex items-center min-w-[100px]">
            <img src="~/assets/img/pokemon_logo.svg" class="h-12 " />
        </nuxt-link>

        <div class="flex items-center">
            <div v-if="getIsAuthenticated">
                <nuxt-link to="/profile">
                    <div class="auth-buttons mr-3 h-max aspect-square bg-circle-account bg-img-single"></div>
                </nuxt-link>
            </div>

            <div v-else class="flex flex-row">
                <nuxt-link to="/signup" class="auth-buttons">Sign Up</nuxt-link>
                <div class="h-5 w-[1px] bg-white "></div>
                <nuxt-link to="/signin" class="auth-buttons">Login</nuxt-link>
            </div>
            
            
            <nuxt-link to="/cart">
                <IconButtonWithIndicator 
                    :featherIconName="`shopping-cart`"
                    :indicatorValue="getCartQuantity"
                />    
            </nuxt-link>
            
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
        
    },
    computed: {
        ...mapGetters({
            getIsAuthenticated: 'user/getIsAuthenticated',
            getCartQuantity: 'cart/getCartQuantity',
        }),
    },
}
</script>


<style scoped>
.auth-buttons {
    @apply text-white text-sm font-light px-4;
}
</style>