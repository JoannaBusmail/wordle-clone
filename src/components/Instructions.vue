<template>
    <div
        v-for="(instruction, index) in instructions"
        :key="index"
        class="step"
    >
        <p class="stepNum">{{ index + 1 }}</p>
        <p>{{ instruction }}</p>
    </div>
</template>
  
<script setup>

const instructions = [
    "Click on a letter of the virtual keyboard or press any letter of your own keyboard",
    "Press enter to check the correct letters",
    "You have 6 opportunities",
]

</script>

<style scoped>
.step {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
}

.stepNum {
    background-color: rgb(196, 200, 255);
    width: 40px;
    height: 40px;
    border-radius: 100%;
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
}
</style>