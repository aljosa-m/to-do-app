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
} from '../actions/types';

const INITIAL_STATE = {
  todos: [],
  todoInput: '',
  displayTodoTitleForm: false,
  filter: '',
  focusedTodoId: null,
  focused: false
};

const TodoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_TODOS:
    return {
      ...state,
      todos: action.payload.data
    };
    case UPDATE_INPUT:
    return {
      ...state,
      todoInput: action.payload
    }
    case CREATE_TODO:
    return {
      ...state,
      todos: [action.payload, ...state.todos],
      todoInput: ''
    }
    case UPDATE_TODO_TITLE:
    state.todos.find(todo => todo.id === action.payload.id).title = action.payload.title;
    return {
      ...state,
      todos: state.todos
    }
    case UPDATE_TODO_COMPLETED:
    state.todos.find(todo => todo.id === action.payload.id).completed = action.payload.completed;
    return {
      ...state,
      todos: state.todos
    }
    case DELETE_TODO:
    return {
      ...state,
      todos: state.todos.filter(todo => todo.id !== action.payload)
    }
    case FILTER_TODOS:
    return {
      ...state,
      filter: action.payload
    }
    case FOCUS_IN_TODO:
    return {
      ...state,
      focusedTodoId: action.payload,
      focused: true
    }
    case FOCUS_OUT_TODO:
    return {
      ...state,
      focusedTodoId: '',
      focused: false
    }
    default:
      return state;
  }
}

export default TodoReducer;
