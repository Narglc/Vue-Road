<template>
    <h3>模板引用 : 获取DOM操作 ref</h3>
    <div ref="container_key" class="container"> {{ content }}</div>
    <button @click="getElementHandle">获取元素</button>


    <input type="text" ref="username">
</template>

<!--
    内容改变： {{ 模板语法}}
    属性改变： v-bind:class 指令 :class
    事件： v-on:click   @click.stop

    如果没有特殊需求，不要操作DOM
-->

<script>
export default {
    data() {
        return {
            content: "内容"
        }
    },
    methods: {
        getElementHandle() {
            // 获取 div DOM 元素本身 this.$refs.container
            console.log(this.$refs.container_key);
            // 更改 DOM 内容 (innerHTML 原生JS的属性)
            this.$refs.container_key.innerHTML = "Hello World"

            console.log(this.$refs.username.value);
        }
    }
}
</script>