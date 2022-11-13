<template>
    <div class="flex flex-col">
        <label 
            class="main-form-label" 
            :v-if="labelTitle !== null">{{ labelTitle }}</label>
        <input 
            :class="[ disabled ? 'main-form-field-disabled' : 'main-form-field', 'main-form-margin-bottom']" 
            :type="type" 
            :placeholder="placeholder" 
            :value="value"
            @input="$emit('input', $event.target.value)"
            :disabled="disabled">
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
        }
    },
}
</script>
