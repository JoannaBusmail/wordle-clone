<template>
    <div class="keyboard">
        <div
            class="keyboardRow"
            v-for="row in keyboardLayout"
            :key="row"
        >
            <button
                v-for="key in row"
                :key="key"
                :class="keyClass(key)"
                @click="handleClick(key)"
            >
                {{ key }}
            </button>
        </div>
    </div>
</template>

<script setup>

const props = defineProps([ 'guessedLetters' ])

const emit = defineEmits([ 'keyPressed' ])


const handleClick = (key) =>
{
    { emit('keyPressed', key) }

}

const keyboardLayout = [
    [ 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p' ],
    [ 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l' ],
    [ 'Backspace', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'Enter' ]
]

const keyClass = (key) =>
{
    let classes = [ 'key' ]

    if (key === 'Backspace' || key === 'Enter') {
        classes.push(key === 'Backspace' ? 'bigKey' : 'key')
    } else if (props.guessedLetters.found.includes(key)) {
        classes.push('foundKey')
    } else if (props.guessedLetters.hint.includes(key)) {
        classes.push('hintKey')
    } else if (props.guessedLetters.notFound.includes(key)) {
        classes.push('notFoundKey')
    } else {
        classes.push('defaultKey')
    }

    return classes.join(' ')
}

</script>


<style scoped>
.keyboard {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: fit-content;
    padding: 5px;
    margin: auto
}

.keyboardRow {
    display: flex;
    margin-top: 10px;
    justify-content: center;
    align-items: center;
}

.key,
.bigKey,
.defaultKey {

    border: none;
    border-radius: 5px;
    height: 50px;
    width: 50px;
    margin-right: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #e0e0e0;
    font-weight: 600;
    font-size: 18px;
    cursor: pointer;

}

.key:hover,
.bigKey:hover {

    background-color: rgb(200, 197, 197);
}

.bigKey {
    width: 95px;
    font-size: 16px;
}

.foundKey {
    background-color: green;
}

.hintKey {
    background-color: yellow;
}

.notFoundKey {
    background-color: rgb(104, 100, 100);
}
</style>