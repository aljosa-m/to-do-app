import React from 'react';
import '../styles/TodoItem.css';

const TodoItem = props => (
  <div className="Card">
    <div className="CardHeader">
      <span>User: {props.userId}</span>
      <span>Todo Id: {props.id}</span>
    </div>
    <div className="CardBody">
      <span>{props.title}</span>
      <span>{props.completed}</span>
    </div>
  </div>
);

export default TodoItem;
