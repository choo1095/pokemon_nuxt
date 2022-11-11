<template>
    <div class="flex flex-col">
        <label 
            class="main-form-label" 
            :for="id"
            :v-if="labelTitle !== null">{{ labelTitle }}</label>
        <input 
            :class="[ disabled ? 'main-form-field-disabled' : 'main-form-field', 'main-form-margin-bottom']" 
            :type="type" 
            :id="id" 
            :placeholder="placeholder" 
            v-bind:value="vModel"
            v-on:input="$emit('input', $event.target.value)"
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
        id: {
            type: String,
            required: true,
        },
        placeholder: {
            type: String,
            required: false,
        },
        vModel: {
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
