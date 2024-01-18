<template>
    <div
        class="letterBox"
        :class="{ 'green': color === 'green', 'yellow': color === 'yellow', 'grey': color === 'grey' }"
    >{{ letter }}</div>
</template>

<script setup>

const props = defineProps({
    letter: {
        type: String,
        default: ''
    },
    color: {
        type: String,
        default: ''
    }
})

</script>

<style scoped>
.letterBox {
    border: 2px solid rgb(156, 151, 151);
    border-radius: 5px;
    height: 50px;
    width: 50px;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    font-weight: 700;

}

.green {
    border-color: rgb(71, 152, 71);
    background-color: rgb(71, 152, 71);
    color: white;
}

.yellow {
    border-color: rgb(241, 241, 71);
    background-color: rgb(241, 241, 71);
    color: white;
}

.grey {
    border-color: rgb(156, 151, 151);
    background-color: rgb(156, 151, 151);
    color: white;
}
</style>
```