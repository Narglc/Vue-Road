<template>
    <h3>数组变化侦听</h3>
    <div>
        <button @click="addListHandle"> 添加数据 </button>
        <ul>
            <li v-for="(item, index) of names" :key="index">{{ item }}</li>
        </ul>

    </div>
</template>

<script>
export default {
    data() {
        return {
            names: ["narglc", "jacques", "lolita"]
        }
    },
    methods: {
        addListHandle() {
            // 数组变更有两种方法：
            // 1. 变更方法，支持 push, pop,shift,unshift,splice,sort,reverse, 同时出发 UI 自动更新
            // this.names.push("sakura")

            // 2. 替换一个数组： filter(),concat(),slice(), 不会引起 UI 自动更新
            this.names.concat(["sakura"])
            console.log(this.names.concat(["sakura"]));
            // 如果想要 UI 自动更新，则应该 如下操作
            this.names = this.names.concat(["sakura"])
            console.log(this.names);

        }
    }
}

</script>