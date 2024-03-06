<template>
    <h3>方法事件处理器 Event 对象</h3>
    <button @click="addCount">Add</button>
    <p>您点击了 {{ count }} 次! </p>
</template>

<script>
export default {
    data() {
        return {
            count: 0
        }
    },
    // 所有的方法或函数都放在这里
    methods: {
        addCount(evt) {
            // Vue 中的event对象，就是原生JS的Event对象，（名字随便起）
            console.log(evt)
            evt.target.innerHTML = "Add:" + this.count
            this.count++
        }
    }
}
</script>