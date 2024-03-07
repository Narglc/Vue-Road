<template>
    <h3>Class 样式绑定 </h3>
    <p>vue专门为class的v-bind用法提供了特殊的功能增强。除了字符串外，表达式的值也可以时对象或数组。</p>

    <p :class="{ 'active': isActive, 'text-danger': hasError }">Class 样式绑定</p>

    <p :class="classObject">多个对象绑定</p>

    <p :class="[activeClass, errorClass]">绑定数组</p>

    <p :class="[isActive ? 'active' : '']">在数组中有条件地渲染某个class, 可使用三元表达式</p>

    <p :class="[isActive ? 'active' : '', { 'text-danger': hasError }]">数组和对象混合使用: 只能数组嵌套对象</p>
</template>

<script>
export default {
    data() {
        return {
            isActive: true,
            hasError: true,
            classObject: {
                'active': true,
                'text-danger': true
            },
            activeClass: 'active',
            errorClass: 'text-danger',
            isActive: true
        }
    }
}
</script>

<style>
.active {
    font-size: 15px;
    background-color: antiquewhite;
}

.text-danger {
    color: red;
}
</style>