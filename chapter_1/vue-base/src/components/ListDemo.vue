<template>
    <h3>列表渲染</h3>
    <div>简单数据：
        <p v-for="item in names"> in : {{ item }}</p>
        <p v-for="item of names"> of : {{ item }}</p>
        <p v-for="(name, index) in names">{{ index }} - {{ name }}</p>
    </div>

    <div>复杂数据：
        <div v-for="(item, index) in result">
            <p>{{ index }} - {{ item.title }}</p>
            <img :src="item.avator" :alt="item.id">
        </div>
    </div>

    <div>v-for遍历对象: (value, key, index)
        <p v-for="item of userInfo"> {{ item }}</p>
        <p v-for="(value, key, index) of userInfo"> {{ value }} - {{ key }} - {{ index }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            names: ["golang", "c++", "python"],
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
            ],
            userInfo: {
                name: "narglc",
                age: 18,
                sex: "男"
            }

        }
    }
}
</script>