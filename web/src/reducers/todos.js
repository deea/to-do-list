const todosTypes = {
  ADD_ITEM: 'ADD_ITEM',
  DELETE_ITEM: 'DELETE_ITEM',
  ON_CHANGE: 'ON_CHANGE',
  ON_CHECKED: 'ON_CHECKED',
  SET_ITEMS: 'SET_ITEMS'
};

export const todosActions = {
  loadItems: () => (dispatch) => {
    fetch('/todos').then(apiResponse => {
      apiResponse.json().then(json => {
        dispatch(todosActions.setItems(json));
      });
    });
  },
  setItems: (todos) => (
    {
      type: todosTypes.SET_ITEMS,
      todos: todos
    }
  ),
  addItem: () => (
    {
      type: todosTypes.ADD_ITEM,
      todo: {title: '', done: false}
    }
  ),
  deleteItem: (i) => (
    {
      type: todosTypes.DELETE_ITEM,
      i: i
    }
  ),
  onChange: (value, i) => (
    {
      type: todosTypes.ON_CHANGE,
      value: value,
      i: i
    }
  ),
  onChecked: (i) => (
    {
      type: todosTypes.ON_CHECKED,
      i: i
    }
  )
};

const initialState = [];

export const todosReducer = (state = initialState, action) => {
  switch(action.type) {
    case todosTypes.SET_ITEMS:
      return action.todos;
    case todosTypes.ADD_ITEM:
      return addingItem(state, action);
    case todosTypes.DELETE_ITEM:
      return deletingItem(state, action);
    case todosTypes.ON_CHANGE:
      return changingItem(state, action);
    case todosTypes.ON_CHECKED:
      return doneItem(state, action); 
    default:
      return state;
  }
};

const addingItem = (state, action) => [...state, action.todo];

const deletingItem = (state, action) => state.filter((item, index) => action.i !== index);

const changingItem = (state, action) => (
  state.map((todo, index) => {
    if (action.i === index) {
      return {...todo, title: action.value};
    }
    return todo;
  })
);

const doneItem = (state, action) => (
  state.map((todo, index) => {
    if (action.i === index) {
      return {...todo, done: !todo.done};
    }
    return todo;
  })
);

