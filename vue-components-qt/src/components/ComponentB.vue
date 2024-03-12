<template>
    <h3>ComponentB</h3>
    <p>{{ title }}</p>
    <p>age:{{ age }}</p>
    <p>simpleVal:{{ simpleVal }}</p>
    <p v-for="(item,index) of names" :key="index"> {{ index }} - {{ item }}</p>
    <p> 地区:{{ area }}</p>
    <button @click="updateHandle">props可以修改数据吗？</button>
</template>

<script>
export default{
    data(){
        return{
            
        }
    },
    // 组件传递参数的props类型校验
    props:{
        age:{
            type:Number,
            default:0
        },
        title:[String, Number,Array,Object],
        simpleVal:String,
        names:{
            type:Array,
            // 默认值
            default(){
                return ["空"]
            }
        },
        area:{
            type:String,
            // 必选项
            required:true
        }
        // 数字和字符串可以直接default, 但是如果是数组和对象， 必须通过工厂函数返回默认值
        // 警告: props 是只读的!!!
    },
    methods:{
        updateHandle(){
            console.log(this.title);
            // props是只读的，不允许修改
            this.title = "不允许修改props数据,会上报告警"
        }
    }
}</script>