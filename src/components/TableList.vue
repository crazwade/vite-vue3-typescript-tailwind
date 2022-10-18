<template>
  <el-table
    :data="props.data"
    height="300"
    :scrollbar-always-on="true"
  >
    <el-table-column
      prop="status"
      label="status"
      width="100"
      align="center"
    >
      <template #default="scope">
        <div v-if="scope.row.status === 1">
          <el-button type="success" plain>已完成</el-button>
        </div>
        <div v-else>
          <el-button type="warning" plain>未完成</el-button>
        </div>
      </template>
    </el-table-column>
    <el-table-column
      prop="content"
      label="content"
      width="180"
      align="center"
    >
      <template #default="scope">
        <div v-if="scope.row.isEdit">
          <el-input v-model="input" :placeholder="scope.row.content" :value="scope.row.content"/>
        </div>
        <div v-else>
          {{ scope.row.content }}
        </div>
      </template>
    </el-table-column>
    <el-table-column
      width="300"
      label="管理區"
      align="center"
    >
      <template #default="scope">
        <div class="buttonArea">
          <div>
            <el-button type="danger" @click="del(scope.row.id)">刪除</el-button>
          </div>
          <div>
            <el-button type="success" @click="change(scope.row.id)">狀態更改</el-button>
          </div>
          <div v-if="onlyWrite && scope.row.isEdit">
            <el-button
              v-if="scope.row.isEdit" type="info" @click="editDone(scope.row.id)" plain>儲存
            </el-button>
            <el-button
              v-else type="info" @click="edit(scope.row.id, scope.row.content)">編輯
            </el-button>
          </div>
          <div v-if="!onlyWrite">
            <el-button
              v-if="scope.row.isEdit" type="info" @click="editDone(scope.row.id)" plain>儲存
            </el-button>
            <el-button
              v-else type="info" @click="edit(scope.row.id, scope.row.content)">編輯
            </el-button>
          </div>
        </div>
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps({
  data: Array,
  onlyWrite: Boolean,
});

const emit = defineEmits(['delete', 'change', 'edit', 'editDone']);

const input = ref('');

const del = (id: number) => {
  emit('delete', id);
};

const change = (id: number) => {
  emit('change', id);
};

const edit = (id: number, content: string) => {
  input.value = content;
  emit('edit', id);
};

const editDone = (id: number) => {
  const newContent = input.value;
  emit('editDone', { id, newContent });
};

</script>

<style scoped>
.read-the-docs {
  color: #888;
}
.buttonArea {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>
