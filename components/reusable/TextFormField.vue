<template>
    <div class="flex flex-col main-form-margin-bottom">
        <label 
            class="main-form-label" 
            :v-if="labelTitle !== null">{{ labelTitle }}</label>
        <input 
            :class="[ disabled ? 'main-form-field-disabled' : 'main-form-field',]" 
            :type="type" 
            :placeholder="placeholder" 
            :value="value"
            @input="$emit('input', $event.target.value)"
            :disabled="disabled"
            :required="required">
        <span v-if="errorMessage !== null && showErrorMessage" class="text-red-500 ">{{ errorMessage }}</span>
    </div>
</template>

<script>
export default {
    name: 'TextFormField',
    props: {
        disabled: {
            type: Boolean, 
            default: false,
        },
        required: {
            type: Boolean,
            default: false,
        },
        type: {
            type: String,
            default: "text",
        },
        placeholder: {
            type: String,
            required: false,
        },
        value: {
            type: String,
            required: true,
        },
        labelTitle: {
            type: String,
            required: false,
        },
        errorMessage: {
            type: String,
            required: false,
        },
        showErrorMessage: {
            type: Boolean,
            default: false,
        }
    },
}
</script>
