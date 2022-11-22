<template>
    <div class="blue-meteor-bg pb-24 ">
        <div class="relative">
            <PokeballSemicircleBackground heightClass="h-[20rem]" />
            <div class="absolute top-28 left-0 right-0 flex flex-col text-center">
                <h1 class="font-semibold text-5xl ">SHOPPING CART</h1>
            </div>
            <div class="hidden lg:block bg-pikachu-yeehaw absolute bg-img-single w-[184px] h-[176px] bottom-12 right-[12%]"></div>   
        </div>
        <div class="center">
            <div class="flex flex-col justify-center w-full md:w-2/3">
                <PokemonCartItem 
                    v-for="(cart, index) in getCartItems"
                    :key="cart.key"
                    :cartItem="cart"
                    @onUpdateQuantity="onUpdateQuantity($event, index)"
                    @onClickRemove="onClickRemove(index)" />
                <div class="flex justify-center md:justify-end mt-12">
                    <nuxt-link to="/">
                        <WhiteButton 
                            title="Continue Shopping"
                            class="mr-5" />
                    </nuxt-link>
                    
                    <RedButton
                        title="Checkout"
                        @onClick="onTapCheckout" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import PokeballSemicircleBackground from '@/components/reusable/PokeballSemicircleBackground.vue'
import PokemonCartItem from '@/components/pokemon/PokemonCartItem.vue'
import WhiteButton from '@/components/reusable/WhiteButton.vue'
import RedButton from '@/components/reusable/RedButton.vue'
import { mapGetters } from 'vuex'

export default {
    name: 'Cart',
    components: {
        PokeballSemicircleBackground,
        PokemonCartItem,
        WhiteButton,
        RedButton
    },
    methods: {
        onUpdateQuantity(quantity, index) {
            this.$store.dispatch('cart/setCartItemQuantity', {
                index: index,
                quantity: quantity,
            });
        },
        onTapCheckout() {
            alert("no!!!")
        },
        onClickRemove(index) {
            this.$store.dispatch('cart/removeFromCart', index);
            this.$swal.fire({
                'text': 'Removed from cart!',
                'toast': true,
                'timer': 2000,
                'position': 'top-end',
                'showConfirmButton': false,
            });
        }
    },
    computed: {
        ...mapGetters({
            getCartItems: 'cart/getCartItems',
        })
    }
}
</script>
