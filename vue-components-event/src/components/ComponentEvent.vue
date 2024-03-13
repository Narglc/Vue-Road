<template>
    <h3>组件事件: 子组件向父组件传递数据</h3>
    <div>
        <Child @someEvent="getHandle" />
        <p>父组件显示子组件传递参数:{{ message }}</p>
        <ul> 组件之间传递数据方案：
            <li> 父传子： props</li>
            <li> 子传父： 自定义事件(this.$emit)</li>
        </ul>
    </div>
</template>

<script>
import Child from "./Child.vue"

export default {
    data() {
        return {
            message: ""
        }
    },
    components: {
        Child
    },
    methods: {
        getHandle(data) {
            console.log("子组件出发了父组件事件, 数据为:", data);
            this.message = data
        }
    }
}
</script>