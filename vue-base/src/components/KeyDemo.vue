<template>
    <h3>Key属性添加到 v-for 中</h3>
    <p v-for="(item, index) of names" :key="index">{{ index }} - {{ item }}</p>
    <p> key 在这里时一个 v-bind 绑定的特殊 attribute; <br>
        <b class="keyinfo">推荐再任何可行的时候都为 v-for 提供一个 key attribute</b>
    </p>

    <div>复杂数据：
        <div v-for="(item, index) in result" :key="item.id">
            <p>{{ index }} - {{ item.title }}</p>
            <img :src="item.avator" alt="" height="200">
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            names: ["python", "golang", "C++"],
            result: [
                {
                    "id": 2012,
                    "title": "海蒂和爷爷",
                    "avator": "/src/assets/cxk_1.jpg",
                },
                {
                    "id": 2023,
                    "title": "怪物",
                    "avator": "/src/assets/cxk_2.jpg",
                },
                {
                    "id": 2024,
                    "title": "小偷家族",
                    "avator": "/src/assets/jgylz.jpg",
                },
            ]
        }
    }
}
</script>