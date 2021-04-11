import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  getTodos,
  createTodo,
  deleteTodo,
  updateTodoTitle,
  updateInput,
  filterTodos,
  focusInTodo,
  focusOutTodo,
  updateTodoCompleted
} from '../actions/TodoActions';
import TodoItem from './TodoItem';
import Button from './Button';
import Input from './Input';
import '../styles/TodoIndex.css';

class TodosIndex extends Component {

  componentDidMount() {
    if (this.props.todos.todos.length === 0) {
      this.props.getTodos();
    }
  }

  renderTodos(todoFilter) {
    let todos;
    switch (todoFilter) {
      case 'completed':
        todos = this.props.todos.todos.filter(todo => todo.completed === true);
        break;
      case 'active':
        todos = this.props.todos.todos.filter(todo => todo.completed === false);
        break;
      default:
        todos = this.props.todos.todos;
    }
    return _.map(todos, todo => {
      return (
        <div key={todo.id}>
          <div>
            <TodoItem
              userId={todo.userId}
              id={todo.id}
              title={todo.title}
              completed={todo.completed}
              todoFocusedId={this.props.todos.focusedTodoId}
              todoFocused={this.props.todos.focused}
              onDelete={() => this.handleDelete(todo.id)}
              onTodoFocusIn={() => this.handleOnTodoFocusIn(todo.id)}
              onTodoFocusOut={() => this.handleOnTodoFocusOut(todo.id)}
              onInputChange={(value => this.handleInputEditChange(value, todo.id))}
              onUpdateCompleted={() => this.handleUpdateCompleted(true, todo.id)}
             />
          </div>
        </div>
      );
    });
  }

  handleUpdateCompleted(completedValue, id) {
    this.props.updateTodoCompleted(completedValue, id)
  }
  handleInputEditChange(inputValue, id) {
    this.props.updateTodoTitle(inputValue.target.value, id);
  }

  handleDelete (id) {
    this.props.deleteTodo(id);
  }

  handleOnTodoFocusIn (id) {
    this.props.focusInTodo(id)
  }

  handleOnTodoFocusOut (id) {
    this.props.focusOutTodo(id)
  }

  handleChange (inputValue) {
    this.props.updateInput(inputValue.target.value);
  }

  handleSubmit (event) {
    event.preventDefault();
    this.props.createTodo(this.props.todos.todoInput);
  }

  handleFilterTodo(filter) {
    this.props.filterTodos(filter);
  }

  render() {
    return(
      <div className="Container">
        <h1>Todo List</h1>
        <form>
          <Input
            placeholder='Enter a Todo'
            value={this.props.todos.todoInput}
            onChange={value =>
            this.handleChange(value)}/>
          <Button buttonAction={this.handleSubmit.bind(this)} buttonLabel='Submit' />
        </form>
        <div>
          <Button buttonAction={() => this.handleFilterTodo('')} buttonLabel='All'/>
          <Button buttonAction={() => this.handleFilterTodo('active')} buttonLabel='Active'/>
          <Button buttonAction={() => this.handleFilterTodo('completed')} buttonLabel='Completed'/>
          {this.renderTodos(this.props.todos.filter)}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    todos: state.todos,
    todoInput: state.todoInput,
    filter: state.filter,
    focusedTodoId: state.focusedTodoId,
    focused: state.focused
  }
)

export default connect(mapStateToProps, {
  getTodos,
  createTodo,
  deleteTodo,
  updateTodoTitle,
  updateInput,
  filterTodos,
  focusInTodo,
  focusOutTodo,
  updateTodoCompleted
})(TodosIndex);
