<template>
    <h3>Parent 组件传递数据 props</h3>
    父组件向子组件传递参数，数量没有限制
    <button @click="updateMsg">更改信息[动态传递参数]</button>
    <Child title="parent数据" name="小明小张和小红" :info="dynamic_message" :age="age" :names="names" :userInfo="userInfo" />
    <p> 注意事项:
        props 传递数据，只能从父级传递子级
    </p>
</template>

<script>

import Child from './Child.vue';

export default {
    data() {
        return {
            dynamic_message: "动态传递数据！",
            // props 传递 Number
            age: 20,
            // props 传递 数组
            names: ["jacques", "narglc", "lolita"],
            userInfo: {
                name: "narglc_obj",
                age: 30
            }
        }
    },
    components: {
        Child
    },
    methods: {
        updateMsg() {
            this.dynamic_message = "动态数据发生了变更!"
        }
    },
    watch: {
        dynamic_message(newVal, oldVer) {
            console.log(oldVer, "|", newVal);
        }
    }
}
</script>