import { useState } from "react";
import "./SimpleTodos.css"
const _todos = [{ id: 1, title: 'see' }, { id: 2, title: 'think' }, { id: 3, title: 'say' }]

function SimpleTodos() {
  const [todos, setTodos] = useState(_todos)

  const handleDelete = (e) => {
    console.log(e)
    setTodos([])
  }
  return (
    <>
      <ul>
        {todos.map(todo => (
          <li key={todo.id} onClick={handleDelete}>
            {todo.title}
            <button>X</button>
          </li>))}
      </ul>
    </>
  )
}

export default SimpleTodos;