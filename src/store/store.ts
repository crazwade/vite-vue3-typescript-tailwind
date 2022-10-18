interface listItem {
  id: number,
  status: number,
  content: string,
  isEdit: boolean,
}

const init = () :listItem[] => {
  const LSList: (string | null) = localStorage.getItem('LSList');

  if (LSList !== null) {
    const LSListObj: listItem[] = JSON.parse(LSList);
    return LSListObj;
  }

  return [];
};

const update = (todoList: listItem[]) => {
  localStorage.setItem('LSList', JSON.stringify(todoList));
};

export default { init, update };
