<template>
  <div :class="[pillColor, 'py-1 px-2 rounded-full flex flex-row min-w-[120px] items-center text-xs']">
    <img :src="require(`~/assets/img/types/${type}.svg`)" class="h-4 mr-2 opacity-50" />
    <div class="flex justify-center text-center text-white font-medium w-full">
      {{ type.toUpperCase() }}
    </div>
  </div>
</template>

<script>
export default {
  name: "PokemonTypePill",
  props: ["type"],
  computed: {
    pillColor() {
      switch (this.type) {
        case "normal":
          return "bg-[#9a9da3]";
        case "fighting":
          return "bg-[#ce416b]";
        case "flying":
          return "bg-[#8fad9e]";
        case "poison":
          return "bg-[#aa6bc8]";
        case "ground":
          return "bg-[#d97845]";
        case "rock":
          return "bg-[#c5b78c]";
        case "bug":
          return "bg-[#91c12f]";
        case "ghost":
          return "bg-[#5269AD]";
        case "steel":
          return "bg-[#5A8EA2]";
        case "fire":
          return "bg-[#FF9D55]";
        case "water":
          return "bg-[#5090D6]";
        case "grass":
          return "bg-[#63BC5A]";
        case "electric":
          return "bg-[#F4D23C]";
        case "psychic":
          return "bg-[#FA7179]";
        case "ice":
          return "bg-[#73CEC0]";
        case "dragon":
          return "bg-[#0B6DC3]";
        case "dark":
          return "bg-[#5A5465]";
        case "fairy":
          return "bg-[#EC8FE6]";
        case "unknown":
        default:
          return "bg-[#68A090]";
      }
    },
  },
};
</script>
