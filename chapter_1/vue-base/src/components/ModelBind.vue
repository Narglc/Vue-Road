<template>
    <h3>表单输入绑定 v-model</h3>
    <form>
        输入框:<input type="text" v-model.lazy="message">
        <p>{{ message }}</p>

        单一的复选框:<input type="checkbox" id="checkbox" v-model="checked" />
        <label for="checkbox">{{ checked }}</label>

        <div class="attention">
            <p> v-model 也提供了修饰符：.lazy, .number, .trim</p>
            <p> .lazy 懒加载，不是实时的</p>
            <p> .number 只接受数字</p>
            <p> .trim 去除前后空格</p>
        </div>

    </form>
</template>

<script>
export default {
    data() {
        return {
            message: '',
            checked: false
        }
    }
}
</script>

<style>
.attention {
    font-size: 10px;
    border: 1px dotted red;

}
</style>