<template>
    <div class="container">
        <h3>Child</h3>
        <ul>
            <li> {{ title }}</li>
            <li>{{ name }}</li>
            <li>{{ info }}</li>
            <li>age:{{ age }}</li>
        </ul>

        <ul>
            传递数组类型渲染：
            <li v-for="(item, index) of names" :key="index">{{ item }}</li>
        </ul>
        <p>UserInfo: {{ userInfo.name }} - {{ userInfo.age }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    // 此处必须使用 字符串的形式
    props: ["title", "name", "info", "age", "names", "userInfo"]
}
</script>

<style scoped>
.container {
    border: 5px dashed red;
}
</style>