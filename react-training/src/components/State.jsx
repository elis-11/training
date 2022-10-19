import { useState } from "react";
import { TodoList } from "../todo/TodoList";

export const State = () => {
  const [todos, setTodos] = useState([
    { id: 1, title: "First Todo", completed: false },
    { id: 2, title: "Second Todo", completed: false },
  ]);

  
  return (
    <div className="w-full flex column justify-center">
      <div className="w-">
        <h2 className="font-semibold text-lg ">Todo App</h2>
        <div className="w-full h-20 border-b-2 ">
          <input
            autoFocus
            type="text"
            placeholder="Todo name..."
            className="w-96 h-5 file:mx-8 ml-9 mt-10 font-bold"
          />
          {/* <label>Todo name</label> */}
        </div>

        <TodoList todos={todos} />
      </div>
    </div>
  );
};
