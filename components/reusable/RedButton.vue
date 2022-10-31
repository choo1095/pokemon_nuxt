<template>
    <button @click="$emit('onClick')" class="red-button">
        {{ title }}
    </button>
</template>

<script>
export default {
    name: 'RedButton',
    props: {
        title: {
            type: String,
            required: true,
        },
    },
}
</script>
