<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import TableList from './components/TableList.vue';
import store from './store/store';

interface listItem {
  id: number,
  status: number,
  content: string,
  isEdit: boolean,
}

const newTODO = ref<string>('');

const onlyWrite = ref<boolean>(false);

const todoList = ref<listItem[]>([]);

onMounted(() => {
  todoList.value = store.init();
});

const undoneList = computed(() => (todoList.value).filter((item) => item.status === 0));
const doneList = computed(() => (todoList.value).filter((item) => item.status === 1));

const newList = () => {
  todoList.value.push({
    id: todoList.value.length,
    status: 0,
    content: newTODO.value,
    isEdit: false,
  });
  newTODO.value = '';
  store.update(todoList.value);
};

const deleteItem = (id: number) => {
  const findIndex = todoList.value.findIndex((item) => item.id === id);

  if (findIndex === -1) {
    alert('no found');
    return;
  }

  todoList.value.splice(findIndex, 1);
  store.update(todoList.value);
};

const changeItem = (id: number) => {
  const findItem = todoList.value.find((item) => item.id === id);

  if (findItem === undefined) {
    alert('no found');
    return;
  }

  findItem.status = findItem.status === 0 ? 1 : 0;
  store.update(todoList.value);
};

const edit = (id: number) => {
  const findItem = todoList.value.find((item) => item.id === id);

  if (findItem === undefined) {
    alert('no found');
    return;
  }

  findItem.isEdit = !findItem.isEdit;
  onlyWrite.value = true;
  store.update(todoList.value);
};

const editDone = (items: {id: number, newContent: string}) => {
  const { id, newContent } = items;
  const findItem = todoList.value.find((item) => item.id === id);

  if (findItem === undefined) {
    alert('no found');
    return;
  }

  findItem.content = newContent;
  findItem.isEdit = !findItem.isEdit;
  onlyWrite.value = false;
  store.update(todoList.value);
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
          <el-button type="primary" @click="newList()">新增事項</el-button>
        </template>
      </el-input>
    </div>
    </div>
    <div class="tableArea">
      <div class="font-mono text-2xl font-bold text-red-600">
        Not Done.....
      </div>
      <TableList :data="undoneList" :onlyWrite="onlyWrite"
        @delete="deleteItem"
        @change="changeItem"
        @edit="edit"
        @editDone="editDone"
      />
      <div class="font-mono text-2xl font-bold text-blue-600">
        Finished.....
      </div>
      <TableList :data="doneList" :onlyWrite="onlyWrite"
        @delete="deleteItem"
        @change="changeItem"
        @edit="edit"
        @editDone="editDone"
      />
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
