<!-- eslint-disable vue/no-unused-vars -->
<template>
    <main>

        <Container v-if="!showResult">
            <TitleText text='Wordle game'>
            </TitleText>
            <div class="lettersBoard">
                <LettersRow
                    v-for="(guess, index) in guesses"
                    :key="index"
                    :word="guess"
                    :solution="randomWord"
                    :enter="index < row"
                ></LettersRow>
            </div>
            <KeyBoard
                @keyPressed="handleLetter"
                :guessedLetters="guessedLetters"
            ></KeyBoard>

        </Container>
        <Result
            v-else
            :result="won"
        ></Result>
    </main>
</template>

<script setup>
import LettersRow from '@/components/LettersRow.vue'
import KeyBoard from '@/components/KeyBoard.vue'
import Container from '@/components/ContainerComp.vue'
import Result from '@/components/Result.vue'
import TitleText from '@/components/TitleText.vue'
import useRandomWord from '@/composables/useRandomWord.js'
import { onMounted, ref, reactive } from 'vue'

const { randomWord, getRandomWord } = useRandomWord()

//states

const guesses = ref([ '', '', '', '', '', '' ])
const row = ref(0)
const guessedLetters = reactive({
    notFound: [],
    found: [],
    hint: []
})
const showResult = ref(false)
const won = ref(false)


//
const handleLetter = (key) =>
{
    if (row.value >= 6) {
        showResult.value = true
        return
    }
    const currentGuess = guesses.value[ row.value ]

    if (key == 'Enter') {
        //send guess
        if (currentGuess.length == 5) {
            row.value++

            currentGuess.split('').forEach((letter, index) =>
            {
                if (letter == randomWord.value[ index ]) {
                    guessedLetters.found.push(letter)
                } else if (randomWord.value.includes(letter)) {
                    guessedLetters.hint.push(letter)
                } else {
                    guessedLetters.notFound.push(letter)
                }

            })

        }
    } else if (key == 'Backspace') {
        guesses.value[ row.value ] = currentGuess.slice(0, -1)

    } else if (currentGuess.length < 5) {
        //ADD LETTER
        guesses.value[ row.value ] += key

    }
    getResult()

}

const getResult = () =>
{
    const currentGuess = guesses.value[ row.value ]
    const correctPositions = currentGuess.split('').filter((letter, index) => letter === randomWord.value[ index ]).length

    if (currentGuess.length == 5 && row.value <= 5 && correctPositions === 5) {

        showResult.value = true
        return won.value = 'won'
    }

    if (currentGuess.length == 5 && correctPositions < 5 && row.value == 5) {

        showResult.value = true
        return won.value = 'lost'
    }

}




onMounted(async () =>
{
    await getRandomWord()
    window.addEventListener('keydown', (e) =>
    {
        e.preventDefault()

        handleLetter(e.key)
    })

    localStorage.setItem('randomWord', randomWord.value)

})


</script>

<style scoped>
.lettersBoard {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 40px;

}
</style>
```