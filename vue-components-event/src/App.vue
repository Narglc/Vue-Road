<template>
  <!-- <ComponentEvent /> -->
  <!-- <Main /> -->
  <!-- <ComponentA/> -->

  <!-- 通过组件方式传递属性, 作用于子组件的根元素
      使用限制:
        1. 必须是唯一根元素
        否则多个根元素时不生效
    -->
  <AttrComp class="attr-container" />
</template>

<script>
import ComponentEvent from './components/ComponentEvent.vue';
import Main from './components/Main.vue'

import ComponentA from './components/ComponentA.vue'

import AttrComp from './components/AttrComp.vue';

export default {
  components: {
    ComponentEvent,
    Main,
    ComponentA,
    AttrComp
  }
}
</script>