import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getTodos } from '../actions/TodoActions';
import TodoItem from './TodoItem';


class TodosIndex extends Component {
  componentDidMount() {
    if (!this.props.todo) {
      this.props.getTodos();
    }
  }

  renderTodos() {
    return _.map(this.props.todos, todo => {
      return (
        <div>
          <div>
            <TodoItem userId={todo.userId} id={todo.id} title={todo.title} completed={todo.completed} />
          </div>
        </div>
      );
    });
  }

  render() {
    return(
      <div>
        <div >
          <Link to="/posts/new">
            Add a Post
          </Link>
        </div>
        <h1>Todo List</h1>
        <div>
          {this.renderTodos()}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { todos: state.todos};
}

export default connect(mapStateToProps, { getTodos })(TodosIndex);
