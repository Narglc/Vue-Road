<template>
    <h3>侦听器</h3>
    <p> {{ message }}</p>
    <button @click="updateData">更新数据</button>
</template>

<script>
export default {
    data() {
        return {
            message: "hello"
        }
    },
    methods: {
        updateData() {
            this.message = this.message + " World"
        }
    },
    // 侦听器
    watch: {
        // 方法要与侦听的变量名相同
        // newVal: 改变之后的数据
        // oldVal: 改变之前的数据
        message(newVal, oldVal) {
            // 数据发生变化，自动执行的函数
            console.log(newVal, "|", oldVal);
        }
    }
}
</script>