import React from 'react';
import '../styles/TodoItem.css';

const TodoItem = props => (
  <div className="Card">
    <div className="CardHeader">
      <span>User: {props.userId}</span>
      <div className="DeleteButton" onClick={props.onDelete}>❌</div>
    </div>
    <div className="CardBody">
      {
        props.todoFocused && props.todoFocusedId === props.id ?
        <input
          value={props.title}
          onChange={value => props.onInputChange(value)}
          onBlur={props.onTodoFocusOut}
          autoFocus
        />
        : <span onClick={props.onTodoFocusIn}>{props.title}</span>
      }
      <div>
        <span>Completed: </span>
        <span className={`Circle ${props.completed ? 'Circle--primary' : 'Circle--danger'}`}>{props.completed ? 'Yes' : 'No'}</span>
        {
          !props.completed &&
          <button onClick={props.onUpdateCompleted}>Complete</button>
        }
      </div>
    </div>
  </div>
);

export default TodoItem;
