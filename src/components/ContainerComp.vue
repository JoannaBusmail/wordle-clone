<template>
    <div class="container">
        <slot></slot>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    margin-top: 30px;
    margin-bottom: 30px;

}
</style>
```