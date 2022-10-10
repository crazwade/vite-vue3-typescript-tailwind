<script setup lang="ts">
import { ElButton } from 'element-plus';
import HelloWorld from './components/HelloWorld.vue';
</script>

<template>
  <div>
    <HelloWorld />
    <router-view />
    <el-button to="/">I am ElButton</el-button>
    <el-button to="/About">I am ElButton</el-button>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
