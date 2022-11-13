<template>
    <div class="flex flex-col main-form-margin-bottom">
        <label 
            v-if="labelTitle !== null"
            class="main-form-label">{{labelTitle}}</label>
        <select 
            :class="[disabled ? 'main-form-select-disabled' : 'main-form-select']"
            :v-model="value"
            :required="required"
            @change="(e) => $emit('input', e.target.value)" >
            <option 
                v-for="option in options"
                :key="option.id"
                :value="option.id" >{{option.title}}</option>
        </select>
    </div>
</template>

<script>
export default {
    name: 'DropDownFormField',
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
    },
}
</script>
