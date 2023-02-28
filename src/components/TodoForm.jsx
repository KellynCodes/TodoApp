import { React, useState, useEffect, useRef } from "react";

const TodoForm = (props) => {
  const focusInputOnRender = useRef(null);

  useEffect(() => {
    focusInputOnRender.current.focus();
  });

  const [todoInput, setTodoInput] = useState("");

  const CollectInputValue = (e) => {
    setTodoInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: todoInput,
    });
    setTodoInput("");
  };
  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      {props.editTodo ? (
        <>
          <input
            type="text"
            placeholder="Edit Todo"
            value={todoInput}
            name="text"
            className="todo-input edit"
            onChange={CollectInputValue}
            ref={focusInputOnRender}
          />
          <button onClick={handleSubmit} className="todo-button edit">
            Update
          </button>
        </>
      ) : (
        <>
          <input
            type="text"
            placeholder="Add Todo"
            value={todoInput}
            name="text"
            className="todo-input"
            onChange={CollectInputValue}
            ref={focusInputOnRender}
          />
          <button onClick={handleSubmit} className="todo-button">
            Add Todo
          </button>
        </>
      )}
    </form>
  );
};

export default TodoForm;
