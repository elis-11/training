import { useEffect } from "react";
import { useState } from "react";
import { TodoList } from "../todo/TodoList";

export const State = () => {
  const [todos, setTodos] = useState([]);
  const [todoTitle, setTodoTitle] = useState("");
  // { id: 1, title: "First Todo", completed: false },
  // { id: 2, title: "Second Todo", completed: false },

useEffect(()=>{
const raw = localStorage.getItem('todos') || []  
setTodos(JSON.parse(raw))
},[])


useEffect(()=>{
  localStorage.setItem('todos', JSON.stringify(todos))
},[todos])

  const addTodo = (e) => {
    // create Todo
    if (e.key === "Enter") {
      // if drop Enter
      setTodos([
        ...todos, // all old Todos
        { id: Date.now(), title: todoTitle, completed: false }, // data für new Todo
      ]);
      setTodoTitle(""); // clear input
    }
  };

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
            value={todoTitle}
            onChange={(e) => setTodoTitle(e.target.value)}
            onKeyPress={addTodo}
          />
          {/* <label>Todo name</label> */}
        </div>

        <TodoList todos={todos} />
      </div>
    </div>
  );
};
