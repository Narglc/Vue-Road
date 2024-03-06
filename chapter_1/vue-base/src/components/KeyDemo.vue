<template>
    <h3>Key属性添加到 v-for 中</h3>
    <p v-for="(item, index) of names" :key="index">{{ index }} - {{ item }}</p>
    <p> key 在这里时一个 v-bind 绑定的特殊 attribute; <br>
        <font color="red">推荐再任何可行的时候都为 v-for 提供一个 key attribute</font>
    </p>

    <div>复杂数据：
        <div v-for="(item, index) in result" :key="item.id">
            <p>{{ index }} - {{ item.title }}</p>
            <img :src="item.avator" alt="">
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
                    "avator": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2554525534.webp"
                },
                {
                    "id": 2023,
                    "title": "怪物",
                    "avator": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2890005059.webp",
                },
                {
                    "id": 2024,
                    "title": "小偷家族",
                    "avator": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2530599636.webp",
                },
            ]
        }
    }
}
</script>