import React from "react";

import TodoListItem from "../TodoListItem/TodoListItem";
import "./TodoList.css";

const TodoList = ({ todos, onDeleted, onDoneClick, onImportantClick }) => {
  const elements = todos.map(item => {
    const { id, ...itemProps } = item;
    return (
      <li key={id} className="list-group-item">
        <TodoListItem
          {...itemProps}
          onDeleted={() => onDeleted(id)}
          onDoneClick={() => onDoneClick(id)}
          onImportantClick={() => onImportantClick(id)}
        />
      </li>
    );
  });

  return <ul className="list-group-item todo-list">{elements}</ul>;
};

export default TodoList;
