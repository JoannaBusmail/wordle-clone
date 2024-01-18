<template>
    <div class="lettersRow">
        <LetterBox
            class="letterBox"
            v-for="i in 5"
            :key="i"
            :letter="word[i - 1]"
            :color="colors[i - 1]"
        >
        </LetterBox>
    </div>
</template>

<script setup>
import LetterBox from './LetterBox.vue'
import { ref, watchEffect } from 'vue'

const props = defineProps({
    word: String,
    solution: String,
    enter: Boolean

})

const colors = ref([ '', '', '', '', '' ])

watchEffect(() =>
{
    if (props.enter) {
        props.word.split('').forEach((letter, index) =>
        {
            if (letter == props.solution[ index ]) {
                colors.value[ index ] = 'green'
            } else if (props.solution.includes(letter)) {
                colors.value[ index ] = 'yellow'
            } else {
                colors.value[ index ] = 'grey'
            }
        })
    }
})

</script>

<style scoped>
.lettersRow {
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    max-width: 20rem;
    margin-bottom: 10px;
    gap: 0.25rem;
    margin-left: auto;
    margin-right: auto;

}
</style>
```