<template>
    <div class="container">
        <TransitionGroup
            appear
            @before-enter="beforeEnter"
            @enter="enter"
        >
            <TitleText
                key="introText"
                data-index="0"
                text="Let's Play"
            ></TitleText>
            <div
                key="instructions"
                data-index="1"
            >
                <Instructions></Instructions>
            </div>
            <div
                key="button"
                data-index="2"
            >
                <button @click="navigateToGame">Play</button>
            </div>
        </TransitionGroup>
    </div>
</template>
  
<script setup>
import gsap from 'gsap'
import { useRouter } from 'vue-router'
import TitleText from '@/components/TitleText.vue'
import Instructions from '@/components/Instructions.vue'

const router = useRouter()

const navigateToGame = () =>
{
    router.push('/game')
}

const beforeEnter = (el) =>
{
    el.style.opacity = 0
    el.style.transform = 'translateY(-100px)'
}

const enter = (el) =>
{
    gsap.to(el, { y: 0, opacity: 1, duration: 0.5, delay: el.dataset.index * 0.3 })
}
</script>
  
 

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
}



button {
    padding: 10px 20px;
    border: 2px solid #cbc8c8;
    background-color: #fff;
    border-radius: 5px;
    text-decoration: none;
    color: #000;
    margin-top: 40px;
    font-size: 14px;
    cursor: pointer;
}
</style>