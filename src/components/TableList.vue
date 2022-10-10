<template>
  <el-table :data="props.data">
    <el-table-column
      prop="status"
      label="status"
      width="80"
      align="center"
    >
      <template #default="scope">
        {{scope.row.status}}
      </template>
    </el-table-column>
    <el-table-column
      prop="content"
      label="content"
      width="180"
      align="center"
    />
    <el-table-column
      width="180"
      label="刪除"
      align="center"
    >
      <template #default="scope">
        <el-button type="danger" @click="del(scope.$index, scope.row.status)">Danger</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup lang="ts">
const props = defineProps({
  data: Array,
});

console.log(props.data);

const del = (index: number, status: number) => {
  alert(index);
  alert(status);
};
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
