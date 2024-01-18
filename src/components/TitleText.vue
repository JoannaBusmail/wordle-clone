<template>
    <div
        key="introText"
        data-index="0"
    >
        <h1>{{ text }}</h1>
    </div>
</template>

<script setup>

const props = defineProps({

    text: String,
})




</script>

<style scoped>
h1 {
    margin-bottom: 40px;
    font-size: 75px;
    font-weight: bold;
}
</style>