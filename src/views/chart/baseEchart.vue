<!--
 * @Author: xkloveme
 * @Date: 2022-01-07 16:54:31
 * @LastEditTime: 2022-01-07 17:03:28
 * @LastEditors: xkloveme
 * @Description: charts基础组件
 * @FilePath: /RuoYi-Vue3/src/views/chart/baseEchart.vue
 * @Copyright © xkloveme
-->
<template>
  <div class="base-echart">
    <div ref="echartDivRef" :style="{ width: width, height: height }"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, defineProps, withDefaults, watchEffect } from 'vue'
import useEchart from './useEchart'

// 定义props
const props = defineProps({
  width: {
    type: String,
    default: "100%",
  },
  height: {
    type: String,
    default: "300px",
  },
  options: {
    type: Object,
    default: ()=>{},
  }
});

const echartDivRef = ref()

onMounted(() => {
  const { setOptions } = useEchart(echartDivRef.value)

  watchEffect(() => {
    setOptions(props.options)
  })
})
</script>
