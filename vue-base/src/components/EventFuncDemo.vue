<template>
    <h3>方法事件处理器</h3>
    <button @dblclick="addCount">double click to Add</button>
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
        addCount() {
            // 读取到data里面的数据的方案： this.count
            this.count += 2
            console.log("你点击了", this.count);
        }
    }
}
</script>