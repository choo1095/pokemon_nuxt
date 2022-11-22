<template>
  <div>
    <div
      v-if="isLoading === false"
      class="bg-detail-blue-background pb-24 relative"
    >
      <div class="relative">
        <PokeballSemicircleBackground heightClass="h-[20rem]" />
        <div class="absolute top-28 left-0 right-0 flex flex-col text-center">
          <h1 class="font-semibold text-5xl">PRODUCT DETAILS</h1>
        </div>
      </div>
      <div class="center">
        <div class="flex flex-col w-2/3">
          <PokeballButton
            class="self-end mb-6"
            @onClick="onTapBack"
            :isPokeballOnLeftSide="false"
            title="Back"
          />

          <div class="bg-black w-full h-10 relative text-white mb-14">
            <span class="absolute left-5 top-1/2 -translate-y-1/2"
              >#{{ pokemonDetail.id }}</span
            >
            <span
              class="
                text-center
                absolute
                md:left-0
                right-5
                top-1/2
                -translate-y-1/2
                md:mx-auto
              "
              >{{ pokemonName }}</span
            >
          </div>

          <div class="flex flex-col lg:grid lg:grid-cols-2">
            <img
              :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonDetail.id}.png`"
              class="mb-6"
              alt=""
            />
            <div class="md:ml-8 flex flex-col">
              <div
                class="
                  bg-blue62B2C6 bg-opacity-50
                  rounded-2xl
                  shadow-xl
                  pl-8
                  pt-9
                  pr-14
                  pb-8
                  mb-9
                "
              >
                <PokemonDetailPill title="Type" class="mb-4">
                  <PokemonTypePill :type="pokemonType" />
                </PokemonDetailPill>

                <PokemonDetailPill title="Ability" class="mb-16">
                  {{ pokemonAbility }}
                </PokemonDetailPill>

                <PokemonSkillPill
                  v-for="move in moveList"
                  :key="move.id"
                  class="mb-4"
                  :move="move"
                />
              </div>

              <div
                class="
                  bg-greyDBDCD7
                  rounded-2xl
                  shadow-xl
                  pl-10
                  pt-5
                  pr-11
                  pb-8
                  flex flex-col
                  mb-9
                "
              >
                <p class="font-medium text-2xl mb-3">{{ pokemonName }}</p>
                <div class="flex justify-between items-center">
                  <p class="text-xl">{{ pokemonPrice }}</p>
                  <StepperButtons @onUpdateValue="onTapQuantity" />
                </div>
              </div>

              <button @click="onTapAddToCart" class="white-button mb-3">
                Add to Cart
              </button>

              <button @click="onTapBuyNow" class="red-button">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      v-else
      :class="[
        'top-16 pt-20 w-screen h-screen flex align-center justify-center bg-white',
        isLoading ? 'fixed' : 'hidden',
      ]"
    >
      <LoadingIndicator2 />
    </div>
  </div>
</template>

<script>
import PokeballSemicircleBackground from "@/components/reusable/PokeballSemicircleBackground.vue";
import PokeballButton from "@/components/reusable/PokeballButton.vue";
import PokemonDetailPill from "@/components/reusable/PokemonDetailPill.vue";
import PokemonSkillPill from "@/components/pokemon/PokemonSkillPill.vue";
import StepperButtons from "@/components/reusable/StepperButtons.vue";
import LoadingIndicator2 from "@/components/reusable/LoadingIndicator2.vue";
import PokemonTypePill from "@/components/pokemon/PokemonTypePill.vue";
import { getPokemonDetails, getPokemonMoveDetails } from "@/api/pokemon.js";
import { POKEMON_PRICE } from "@/constants/";

export default {
  components: {
    PokeballSemicircleBackground,
    PokeballButton,
    PokemonDetailPill,
    PokemonSkillPill,
    StepperButtons,
    LoadingIndicator2,
    PokemonTypePill,
  },
  data() {
    return {
      isLoading: false,
      pokemonDetail: null,
      moveList: [],
      quantity: 0,
    };
  },
  methods: {
    onTapBack() {
      this.$router.go(-1);
    },
    onTapQuantity(value) {
      this.quantity = value;
    },
    onTapAddToCart() {
      this.$store.dispatch("cart/addToCart", {
        pokemon: this.pokemonDetail,
        quantity: this.quantity,
      });
      this.$swal('Added to cart!');
    },
    onTapBuyNow() {
      alert("no");
    },
    async retrievePokemonDetails() {
      this.isLoading = true;

      const getPokemonDetailsAPI = await getPokemonDetails(this.pokemonId);

      this.isLoading = false;

      this.pokemonDetail = getPokemonDetailsAPI;
    },
    async retrieveSkillDetails(url) {
      this.isLoading = true;

      const getPokemonMoveDetailsAPI = await getPokemonMoveDetails(url);
      console.log("HELP WHY IS THIS BEING CALLED");

      this.isLoading = false;

      this.moveList.push(getPokemonMoveDetailsAPI);
    },
    async loadPokemonInfo() {
      await this.retrievePokemonDetails().then(async (_) => {
        const pokemonMoveList = this.pokemonDetail.moves.slice(0, 4);
        for (let i = 0; i < pokemonMoveList.length; i++) {
          await this.retrieveSkillDetails(pokemonMoveList[i].move.url);
        }
      });
    },
  },
  computed: {
    pokemonId() {
      return this.$route.params.id;
    },
    pokemonName() {
      const name = this.pokemonDetail.name;
      return this.$capitalizeFirstLetter(name);
    },
    pokemonType() {
      return this.pokemonDetail.types[0].type.name;
    },
    pokemonAbility() {
      const ability = this.pokemonDetail.abilities.find(
        (element) => element.is_hidden === false
      ).ability.name;
      return this.$capitalizeFirstLetter(ability);
    },
    pokemonPrice() {
      return POKEMON_PRICE;
    },
  },
  async created() {
    this.loadPokemonInfo();
  },
};
</script>
