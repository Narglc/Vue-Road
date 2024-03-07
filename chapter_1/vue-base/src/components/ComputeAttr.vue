<template>
    <h3>计算属性</h3>
    <div>
        <h4>{{ itbaizhan.name }}</h4>
        <p>计算属性computed结果:{{ itbaizhanContent }}</p>
        <p>事件方法methods结果:{{ itbaizhanContent }}</p>
        <p>两种方法效果相同，重点区别：</p>
        <ul>
            <li> 计算属性： 计算属性值会基于响应式依赖被<b class="keyinfo">缓存</b>，一个计算属性机会在其响应式依赖更新时才重新计算</li>
            <li> 方法：方法调用<b class="keyinfo">总是</b>会在重渲染发生时再次执行函数</li>
        </ul>

    </div>
</template>

<script>
export default {
    data() {
        return {
            itbaizhan: {
                name: "百战程序员",
                content: ["前端", "Java", "Python"]
            }
        }
    },
    // 计算属性
    computed: {
        itbaizhanContent() {
            return this.itbaizhan.content.length > 0 ? "Yes" : "No"
        }
    },
    // 或者使用 methods 实现
    methods: {
        itbaizhanContentFunc() {
            return this.itbaizhan.content.length > 0 ? "Yes" : "No"
        }
    }
}
</script>