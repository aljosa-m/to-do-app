import Axios from 'axios';
import {
  CREATE_TODO,
  DELETE_TODO,
  FILTER_TODOS,
  FOCUS_IN_TODO,
  FOCUS_OUT_TODO,
  GET_TODOS,
  UPDATE_INPUT,
  UPDATE_TODO_TITLE,
  UPDATE_TODO_COMPLETED
} from './types';

const TODO_URL = 'https://jsonplaceholder.typicode.com/todos';

export const getTodos = () => async dispatch => {
  const request = await Axios.get(TODO_URL, {
    params: {
      _limit: 10
     }
  });
  dispatch( {
    type: GET_TODOS,
    payload: request
  })
}

export const createTodo = (todo) => async dispatch => {
  Axios({
    method: 'POST',
    data: JSON.stringify({
      userId: 1,
      title: todo,
      completed: false,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    },
    url: TODO_URL
  }).then(response => {
    dispatch( {
      type: CREATE_TODO,
      payload: assignRandomId(response.data)
    })
  }).catch(error => {
    console.log(error);
  });
}

export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    payload: id
  }
}

export const updateInput = (value) => {
  return {
    type: UPDATE_INPUT,
    payload: value
  }
}

export const filterTodos = (filterValue) => {
  return {
    type: FILTER_TODOS,
    payload: filterValue
  }
}

export const focusInTodo = (id) => {
  return {
    type: FOCUS_IN_TODO,
    payload: id
  }
}

export const focusOutTodo = (id) => {
  return {
    type: FOCUS_OUT_TODO,
    payload: id
  }
}

export const updateTodoTitle = (value, id) => {
  return {
    type: UPDATE_TODO_TITLE,
    payload: {
      title: value,
      id: id
    }
  };
};

export const updateTodoCompleted = (value, id) => {
  return {
    type: UPDATE_TODO_COMPLETED,
    payload: {
      completed: value,
      id: id
    }
  };
};

const assignRandomId = (modifiedResponse) => {
  modifiedResponse.id = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
  return modifiedResponse;
}
