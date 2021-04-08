import Axios from 'axios';

export const GET_TODOS = 'getTodos';
export const GET_ACTIVE_TODOS = 'getActiveTodos';
export const GET_COMPLETED_TODOS = 'getCompletedTodos';
export const CREATE_TODOS = 'createTodos';
export const FETCH_TODOS = 'fetchTodos';
export const DELETE_TODOS = 'deleteTodos';

const TODO_URL = 'https://jsonplaceholder.typicode.com/todos';

export const getTodos = () => {

  const request = Axios.get(TODO_URL);

  return {
    type: GET_TODOS,
    payload: request
  }
}
