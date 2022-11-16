<template>
    <div class="flex flex-col main-form-margin-bottom">
        <label 
            v-if="labelTitle !== null"
            class="main-form-label" >{{ labelTitle }}</label>
        <div class="grid grid-cols-1 sm:grid-cols-2">
            <div 
                v-for="option in options"
                :key="option.id">
                <input 
                    :id="option.id"
                    type="checkbox" 
                    :checked="value.some(item => item === option.id)"
                    :value="option.id"
                    :disabled="disabled"
                    @change="onUpdateField" >
                <label :for="option.id">{{ option.title }}</label>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CheckboxFormField',
    props: {
        disabled: {
            type: Boolean, 
            default: false,
        },
        value: {
            type: Array,
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
    },
    methods: {
        onUpdateField(e) {
            let itemClicked = e.target.value;
            let newValue = JSON.parse(JSON.stringify(this.value));
            if(!newValue.includes(itemClicked)) {
                newValue.push(itemClicked);
            } else {
                newValue.splice(newValue.indexOf(itemClicked), 1);
            }
            this.$emit('input', newValue)
        }
    }
}
</script>
