import React from "react";
import { TodoItem } from "./TodoItem";

export const TodoList = ({todos}) => {
  return (
    <ul className="space-y-1'">
      {todos.map((item) => (
        <TodoItem key={item.id} {...item} />
      ))}
    </ul>
  );
};
