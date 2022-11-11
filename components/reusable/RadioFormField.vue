<template>
    <div class="flex flex-col">
        <label 
            v-if="labelTitle !== null" 
            class="main-form-label" 
            :for="id">{{ labelTitle }}</label>
        <div class="flex flex-row main-form-margin-bottom">
            <div v-for="option in options" :key="option.id"> 
                <input 
                    type="radio" 
                    :id="option.id" 
                    :name="id" 
                    :disabled="disabled" 
                    v-bind:value="option.id"
                    v-on:input="$emit('input', $event.target.value)">
                <label class="main-form-radio-label" for="id">{{option.title}}</label>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'RadioFormField',
    props: {
        disabled: {
            type: Boolean, 
            default: false,
        },
        vModel: {
            type: String,
            required: true,
        },
        labelTitle: {
            type: String,
            required: false,
        },
        options: {
            type: Array,
            required: true,
        },
        id: {
            type: String,
            required: true,
        },
    },
}
</script>
