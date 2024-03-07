<template>
    <h3>內联处理器</h3>
    <p> 内联 工作中很少使用</p>
    <button v-on:click="count--">Minus</button>
    <button @click="count++">Add</button>
    <p>您点击了 {{ count }} 次! </p>
</template>

<script>
export default {
    data() {
        return {
            count: 0
        }
    }
}
</script>