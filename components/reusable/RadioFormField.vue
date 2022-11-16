<template>
    <div class="flex flex-col">
        <label 
            v-if="labelTitle !== null" 
            class="main-form-label">{{ labelTitle }}</label>
        <div class="flex flex-row main-form-margin-bottom">
            <div v-for="option in options" :key="option.id"> 
                <input 
                    type="radio" 
                    :id="option.id"
                    :value="value"
                    :disabled="disabled"
                    :checked="value === option.id"
                    @change="$emit('input', option.id)"
                    :required="required">
                <label 
                    :for="option.id"
                    class="main-form-radio-label">{{option.title}}</label>
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
        required: {
            type: Boolean,
            default: false,
        },
        value: {
            type: String,
            required: false,
        },
        labelTitle: {
            type: String,
            required: false,
        },
        options: {
            type: Array,
            required: true,
        },
        name: {
            type: String,
            required: true,
        }
    },
}
</script>
