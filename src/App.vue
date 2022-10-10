<script setup lang="ts">
import { ref, reactive } from 'vue';
import TableList from './components/TableList.vue';

const newTODO = ref('');

const waitList = reactive([
  {
    status: 0,
    content: 'content',
  },
]);

const doneList = reactive([
  {
    status: 1,
    content: 'content',
  },
]);

const test = () => {
  waitList.push({
    status: 0,
    content: newTODO.value,
  });
  newTODO.value = '';
};

</script>

<template>
  <div>
    <div class="inputArea">
      <div class="mt-4">
      <el-input
        v-model="newTODO"
        placeholder="Please input"
        class="input-with-select"
      >
        <template #append>
          <el-button type="primary" @click="test()">新增事項</el-button>
        </template>
      </el-input>
    </div>
    </div>
    <div class="tableArea">
      <div class="font-mono text-2xl font-bold text-red-600">
        Not Done.....
      </div>
      <TableList :data="waitList" />
      <div class="font-mono text-2xl font-bold text-blue-600">
        Finished.....
      </div>
      <TableList :data="doneList" />
    </div>
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
