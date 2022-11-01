<template>
  <div class="w-32 h-8 flex items-stretch justify-between overflow-hidden border rounded-sm">
    <button @click="onTapMinus" 
    :class="[
            'material-icons stepper-button',
            isMinTappable ? '' : 'disabled-color'
        ]"
        :disabled="!isMinTappable">-</button>
    <div class="w-20 flex items-center justify-center p-3 border-l border-r basis-2/4">
        <p class="truncate overflow-hidden">{{ value }}</p>
    </div>
    <button @click="onTapAdd" 
        :class="[
            'material-icons stepper-button',
            isMaxTappable ? '' : 'disabled-color'
        ]"
        :disabled="!isMaxTappable">+</button>
    
  </div>
</template>

<script>
export default {
    data() {
        return {
            value: this.initialValue,
            minValue: 1,
            maxValue: 10,
        }
    },
    props: {
        initialValue: {
            type: Number,
            default: 1,
        }
    },
    methods: {
        onTapAdd() {
            if (this.value === this.maxValue) return;

            this.value += 1
            this.$emit('onUpdateValue', this.value);
        },
        onTapMinus() {
            if (this.value === this.minValue) return;

            this.value -= 1
            this.$emit('onUpdateValue', this.value);
        }
    },
    computed: {
        isMinTappable() {
            return this.value !== this.minValue
        },
        isMaxTappable() {
            return this.value !== this.maxValue
        }
    }
}
</script>

<style>
.disabled-color {
    @apply text-gray-300;
}

.stepper-button {
    @apply text-base  p-3 m-0 text-center flex items-center justify-center basis-1/4;
}
</style>