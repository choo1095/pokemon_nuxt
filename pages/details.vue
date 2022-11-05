<template>
    <div class="bg-detail-blue-background pb-24 ">
        <div class="relative">
            <PokeballSemicircleBackground heightClass="h-[20rem]" />
            <div class="absolute top-28 left-0 right-0 flex flex-col text-center">
                <h1 class="font-semibold text-5xl ">PRODUCT DETAILS</h1>
            </div>
        </div>
        <div class="center">
            <div class="flex flex-col w-2/3">
                <PokeballButton
                    class="self-end mb-6"
                    @onClick="onTapBack"
                    :isPokeballOnLeftSide="false"
                    title="Back"/> 

                <div class="bg-black w-full h-10 relative text-white mb-14">
                    <span class="absolute left-5 top-1/2 -translate-y-1/2">#100</span>
                    <span class="text-center absolute md:left-0 right-5 top-1/2 -translate-y-1/2 md:mx-auto">pokechu</span>
                </div>

                <div class="flex flex-col md:grid md:grid-cols-2">
                    <img src="~/assets/img/placeholder_image.png" class="mb-6" alt="">
                    <div class="md:ml-8 flex flex-col">
                        <div class="bg-blue62B2C6 bg-opacity-50 rounded-2xl shadow-xl pl-8 pt-9 pr-14 pb-8 mb-9 ">
                            <PokemonDetailPill 
                                title="Type"
                                class="mb-4">
                                <img src='~/assets/img/pokemon_logo.svg' class='h-12' />
                            </PokemonDetailPill>

                            <PokemonDetailPill 
                                title="Ability"
                                class=" mb-16">
                                <img src='~/assets/img/pokemon_logo.svg' class='h-12' />
                            </PokemonDetailPill>

                            <PokemonSkillPill 
                                v-for="i in 4"
                                :key="i"
                                class="mb-4"
                                skillName="skoll name"/>
                        </div>

                        <div class="bg-greyDBDCD7 rounded-2xl shadow-xl pl-10 pt-5 pr-11 pb-8 flex flex-col mb-9">
                            <p class="font-medium text-2xl mb-3">Pokemon name goesh ere</p>
                            <div class="flex justify-between items-center">
                                <p class="text-xl">RM99.10</p>
                                <StepperButtons />
                            </div>
                        </div>

                        <button @click="onTapAddToCart" class="white-button mb-3">Add to Cart</button>

                        <button @click="onTapBuyNow" class="red-button">Buy Now</button>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import PokeballSemicircleBackground from '@/components/reusable/PokeballSemicircleBackground.vue'
import PokeballButton from '@/components/reusable/PokeballButton.vue'
import PokemonDetailPill from '@/components/reusable/PokemonDetailPill.vue'
import PokemonSkillPill from '@/components/pokemon/PokemonSkillPill.vue'
import StepperButtons from '@/components/reusable/StepperButtons.vue'

export default {
    components: {
        PokeballSemicircleBackground,
        PokeballButton,
        PokemonDetailPill,
        PokemonSkillPill,
        StepperButtons,
    },
    methods: {
        onTapBack() {
            this.$router.go(-1)
        },
        onTapAddToCart() {
            alert('added to cart')
        },
        onTapBuyNow() {
            alert('no')
        },
    }
}
</script>
