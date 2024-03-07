<template>
    <h3>Child</h3>
    <div>
        <button @click="clickEventHandle">传递数据到父组件</button>
    </div>
</template>

<script>
export default {
    methods: {
        clickEventHandle() {
            // 自定义事件 
            this.$emit("someEvent", "childData")
        }
    }
}
</script>