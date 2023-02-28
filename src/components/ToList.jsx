import React from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import { useState } from "react";

const ToList = () => {
  const [todos, setTodos] = useState([]);
  const addTodo = (Todo) => {
    if (!Todo.text || /^\s*$/.test(Todo.text)) {
      return;
    }
    const newTodos = [Todo, ...todos];
    setTodos(newTodos);
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const todoEdit = (IdOfTodo, newValueOfTodo) => {
    if (!newValueOfTodo.text || /^\s*$/.test(newValueOfTodo.text)) {
      return;
    }

    setTodos((todoToEdit) =>
      todoToEdit.map((todoItem) =>
        todoItem.id === IdOfTodo ? newValueOfTodo : todoItem
      )
    );
  };

  const deleteTodo = (id) => {
    const removedTodoItem = [...todos].filter((todo) => todo.id !== id);

    setTodos(removedTodoItem);
  };

  return (
    <div>
      <h1>What's Your plan for the Day</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        deleteTodo={deleteTodo}
        editTodo={todoEdit}
      />
    </div>
  );
};

export default ToList;
