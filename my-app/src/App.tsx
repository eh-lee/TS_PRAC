import React, { useState } from 'react'
import Form from './components/Form'
import Working from './components/Working'

type Todo = {
  id: number,
  title: string,
  contents: string,
  isDone: boolean,
}

const App = () => {
  const INIT_STATE: Todo[] = [
    {
      id: 1, title: "title", contents: "contents", isDone: false
    }
  ]

  const [todos, setTodos] = useState<Todo[]>(INIT_STATE)
  console.log("todos-->", todos);

  return (
    <div>
      <h1>
      To Do List
      </h1>
      <Form todos={todos} setTodos={setTodos} />
      <Working todos={todos} setTodos={setTodos} />
    </div>
  )
}

export default App