import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import TodosIndex from './components/TodosIndex';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <TodosIndex />
    </Provider>
  </React.StrictMode>,
  document.querySelector('.container'));
