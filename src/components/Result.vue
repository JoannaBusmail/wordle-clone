<!-- eslint-disable no-unused-vars -->
<template>
    <div class="results">
        <TitleText
            :class="{ 'won-color': result === 'won', 'lost-color': result === 'lost' }"
            :text=getResultMessage
        >
        </TitleText>
        <p>The correct word was: {{ randomWord }}</p>
        <RouterLink
            to="/"
            class="playAgain"
        >Play Again
        </RouterLink>
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import useRandomWord from '@/composables/useRandomWord.js'
import { onMounted, computed } from 'vue'
import TitleText from '@/components/TitleText.vue'

const { randomWord } = useRandomWord()


const props = defineProps({
    result: 'won' | 'lost'
})


onMounted(async () =>
{
    const storedWords = localStorage.getItem('randomWord')
    if (storedWords) {
        randomWord.value = storedWords
    }
})

const getResultMessage = computed(() =>
{
    if (props.result === 'won') {
        return 'You Won!'
    }
    return 'You Lost!'
})

</script>


<style scoped>
.results {
    text-align: center;
    font-size: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
}

.resultText {
    color: #fff;
    border-radius: 5px;
    height: 60px;
    width: 200px;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    font-weight: 700;
}

.won-color {
    color: rgb(73, 158, 73);
}

.lost-color {
    color: rgb(223, 62, 62);
}

.playAgain {
    display: inline-block;
    margin-top: 50px;
    padding: 10px 20px;
    border: 2px solid #cbc8c8;
    border-radius: 5px;
    text-decoration: none;
    color: #000;
    font-size: 14px;
}
</style>