<!--
 * @Author: xkloveme
 * @Date: 2022-01-07 15:07:43
 * @LastEditTime: 2022-01-07 18:51:01
 * @LastEditors: xkloveme
 * @Description: 首页模版
 * @FilePath: /gsjw-ft-web/src/views/index.vue
 * @Copyright © xkloveme
-->
<template>
  <div class="homePage-container">
    <HomeChart/>
  </div>
</template>

<script setup>
import HomeChart from "@/views/home/index";
</script>

<style lang="scss" scoped>
.homePage-container {
  width: 1000px;
  max-width: 100%;
  margin: 200px auto;
}
</style>
