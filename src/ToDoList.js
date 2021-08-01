import React, { useEffect, useState } from "react"

import NewTodo from "./NewTodo"
import TodoItem from "./TodoItem"

const ToDoList = () => {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/myTodos`)
      .then((r) => r.json())
      .then(data => setTodos(data))
  }, [])

  const handleAddToDo = (newToDo) => {
    fetch(`${process.env.REACT_APP_API_URL}/myTodos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newToDo)
    })
      .then(resp => resp.json())
      .then(data => setTodos([...todos, data]))
  }

  function deleteTodo (id) {
    const updatedTodos = todos.filter(todo => todo.id !== id)
    setTodos(updatedTodos)
  }

  return (
      <div className="list">
        <div className="todo-app">
          <NewTodo todos={todos} onAddTodo={handleAddToDo} />
          <div>
          <h2>My Todos</h2>
          <div >
          <ul className="b">
            {todos.map((todo) => (
              <TodoItem key={todo.id} todo={todo} onDeleteTodo={deleteTodo} />
            ))}
          </ul>
          </div>
        </div>
        </div>
        </div>
  )
}

export default ToDoList
