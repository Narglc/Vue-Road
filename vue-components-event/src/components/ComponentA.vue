<template>
    <h3> ComponentA</h3>
    <ComponentB :title="title" :onEvent="dataFn"/>
    <p>子组件传递过来的参数: {{ messageFromSon }}</p>
</template>

<script>
import ComponentB from './ComponentB.vue'
export default{
    data(){
        return{
            title:"标题(传递的)",
            messageFromSon: ""
        }
    },
    components:{
        ComponentB
    },
    methods:{
        dataFn(data){
            console.log(data);
            this.messageFromSon = data
        }
    }
}
</script>