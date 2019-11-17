import React from 'react';
import { Provider } from 'react-redux';
import TodosList from '../TodosList';
import { todosReducer } from '../../reducers/todos';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';


const store = createStore(todosReducer, 
  compose(
    applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

const App = () => (
    <Provider store={store}>
      <TodosList />
    </Provider>
);

export default App;
