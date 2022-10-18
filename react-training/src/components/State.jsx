import { useState } from 'react'
import { TodoList } from '../todo/TodoList'

export const State = () => {

const [todos, setTodos] = useState([
  {id: 1, title: 'First Todo', completed: false},
  {id: 2, title: 'Second Todo', completed: false},
])

  return (
    <div>
      <h2>Todo App</h2>
      <div className='w-full h-20 border-b-2 border-gray-400 bg-slate-200'>
        <input type='text' className=''/>
        <label>Todo name</label>
      </div>

      <TodoList todos={todos}/>
    </div>
  )
}
