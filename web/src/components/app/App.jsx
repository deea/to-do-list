import React from 'react';
import { Provider } from 'react-redux';
import TodosList from '../TodosList';
import { todosReducer } from '../../reducers/todos';
import { createStore } from 'redux';


const store = createStore(todosReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const App = () => {
  
  return (
    <Provider store={store}>
      <TodosList />
    </Provider>
  );
};

export default App;
