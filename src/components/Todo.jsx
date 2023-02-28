import React from "react";
import { useState } from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import MyTodoForm from "./TodoForm";

const Todo = ({ todos, completeTodo, deleteTodo, todoEdit }) => {
  const [editTodo, setEditTodo] = useState({
    id: null,
    value: "",
  });

  const submitEditedTodo = (editValue) => {
    todoEdit(editTodo.id, editValue);
    setEditTodo({
      id: null,
      value: "",
    });
  };

  if (editTodo.id) {
    return <MyTodoForm editTodo={editTodo} onSubmit={submitEditedTodo} />;
  }

  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
      key={index}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className="icons">
        <RiCloseCircleLine
          onClick={() => deleteTodo(todo.id)}
          className="delete-todo"
        />
        <TiEdit
          onClick={() => setEditTodo({ id: todo.id, value: todo.text })}
          className="edit-icon"
        />
      </div>
    </div>
  ));
};

export default Todo;
