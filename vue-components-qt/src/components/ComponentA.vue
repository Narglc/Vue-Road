<template>
    <h3>ComponentA</h3>
    <ComponentB :title="title" :age="title.age" :simple-val="sval" :area="area" />
</template>

<script>
import  ComponentB from './ComponentB.vue';

export default{
    data(){
        return{
            title:{
                name:"xiaoming",
                age:30,
                sex:"male"
            },
            sval:"真是这样吗？",
            name:["iwen","ime"],
            area:"深圳"
        }
    },
    components:{
        ComponentB
    }
}</script>