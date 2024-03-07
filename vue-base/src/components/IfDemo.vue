<template>
    <div>
        <h3>条件渲染</h3>
        <div><b>v-if v-else 用法:</b>
            <div v-if="flag">true分支:你能看到我吗？</div>
            <div v-else>false分支:那你还是看看我吧</div>
        </div>

        <div>
            <b>v-else-if 用法：</b>
            <div v-if="type == 'A'">A</div>
            <div v-else-if="type == 'B'">B</div>
            <div v-else-if="type == 'C'">C</div>
            <div v-else>Not A/B/C</div>
        </div>

        <div>
            <b>v-show 用法: 单个分支</b>
            <div v-show="flag">你能看到我吗</div>
        </div>

        <div>
            <img src="/src/assets/v-if_v-show_diff.png" title="v-if vs v-show" width="600">
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            flag: true,
            type: "D"
        }
    }
}
</script>