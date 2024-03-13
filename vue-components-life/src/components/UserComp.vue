<template>
    <h3>组件生命周期应用</h3>
    <p ref="name">百战程序员</p>
    <hr>
    <ul>
        <li v-for="(item,index) of banner" :key="index">
            <h3> {{ item.title }}</h3> 
            <p>{{ item.content }}</p>
        </li>
    </ul>

</template>

<script>

export default{
    data(){
        return{
            banner:[]
        }
    },
    beforeMount(){
        console.log("before", this.$refs.name);
    },
    mounted(){
        // 通过 ref 获取元素 DOM 结构，需要在 挂载后 执行
        console.log("after", this.$refs.name);

        // 模拟网络请求,数据可以在挂载完成后再更新数据
        this.banner = [
            {
                "title":"我在爱尔兰",
                "content":"爱尔兰介绍"
            },
            {
                "title":"一个人的东京",
                "content":"东京介绍"
            },
            {
                "title":"普罗斯旺的梦",
                "content":"普罗斯旺的介绍"
            }
        ]
    }
}

</script>
  