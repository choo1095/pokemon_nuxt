<template>
    <button @click="$emit('onClick')" class="white-button">
        {{ title }}
    </button>
</template>

<script>
export default {
    name: 'WhiteButton',
    props: {
        title: {
            type: String,
            required: true,
        },
    },
}
</script>
