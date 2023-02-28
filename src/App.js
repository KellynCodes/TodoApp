import React from "react";
import TodoList from "./components/ToList";
import "./index.css";

const MyApp = () => {
  return (
    <div className="todo-app">
      <TodoList />
    </div>
  );
};

export default MyApp;
