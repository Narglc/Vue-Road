<template>
    <hr>
    <h3>父组件</h3>
    <p>{{ title }}</p>
    <Child :title="title"/>
</template>

<script>
import Child from './Child.vue';

export default{
    data(){
        return{

        }
    },
    components:{
        Child
    },
    props:["title"]
}
</script>