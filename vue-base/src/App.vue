<script setup>
import AttrBind from './components/AttrBind.vue'
import IfDemo from './components/IfDemo.vue'
import ListDemo from './components/ListDemo.vue'
import KeyDemo from './components/KeyDemo.vue'
import EventInlineDemo from './components/EventInlineDemo.vue'
import EventFuncDemo from './components/EventFuncDemo.vue'
import EventArgsDemo from './components/EventArgsDemo.vue'
import EventFuncArgsDemo from './components/EventFuncArgsDemo.vue'
import EventModifier from './components/EventModifier.vue'
import ArrayList from './components/ArrayList.vue'
import ComputeAttr from './components/ComputeAttr.vue'
import ClassBind from './components/ClassBind.vue'
import StyleBind from './components/StyleBind.vue'
import WatchDemo from './components/WatchDemo.vue'
import ModelBind from './components/ModelBind.vue'
import TempRef from './components/TempRef.vue'

</script>

<template>
  <div class="box">
    <!-- <div class="borderline">
      <ListDemo />
    </div>

    <div class="borderline">
      <IfDemo />
    </div>

    <div class="borderline">
      <AttrBind />
    </div>

    <div class="borderline">
      <KeyDemo />
    </div>

    <div class="borderline">
      <EventInlineDemo />
    </div>

    <div class="borderline">
      <EventFuncDemo />
    </div>

    <div class="borderline">
      <EventArgsDemo />
    </div>

    <div class="borderline">
      <EventFuncArgsDemo />
    </div>

    <div class="borderline">
      <EventModifier />
    </div>
    <div class="borderline">
      <ArrayList />
    </div>
    <div class="borderline">
      <ComputeAttr />
    </div> -->

    <div class="borderline">
      <ClassBind />
    </div>

    <div class="borderline">
      <StyleBind />
    </div>

    <div class="borderline">
      <WatchDemo />
    </div>

    <div class="borderline">
      <ModelBind />
    </div>

    <div class="borderline">
      <TempRef />
    </div>
  </div>
</template>

<style>
.box {
  display: flex;
  flex-wrap: wrap;
}

.borderline {
  border: 1px solid #000
}

.keyinfo {
  color: red;
  font-size: large;
  background-color: aqua;
}
</style>