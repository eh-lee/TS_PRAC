import React from 'react'

type Todo = {
  id: number,
  title: string,
  contents: string,
  isDone: boolean,
}

type AppProps = {
  todos: Todo[],
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const Working: React.FC<AppProps> = ({todos, setTodos}) => {

  const chgBtn = (todo: Todo) => {
    todo.isDone = !todo.isDone;
    const updatedTodos = todos.map(el => (el.id === todo.id ? todo : el));
    setTodos(updatedTodos);
  }

  const delBtn = (id: number) => {
    const refreshTodos = todos.filter(el => el.id !== id)
    setTodos(refreshTodos);
  }
  
  return (
    <React.Fragment>
    <div>
      <h2>Working</h2>
      {todos.map(todo=> {
        if(!todo.isDone)
          return (
        <div key={todo.id}>
          {todo.title} & {todo.contents}
          <button onClick={()=>chgBtn(todo)}>{todo.isDone ? "cancel" : "complete"}</button>  
          <button onClick={()=>delBtn(todo.id)}>delete</button>  
        </div>
          )
      })}
    </div>
        <div>
        <h2>Done</h2>
        {todos.map(todo=> {
          if(todo.isDone)
            return (
          <div key={todo.id}>
            {todo.title} & {todo.contents}
            <button onClick={()=>chgBtn(todo)}>{todo.isDone ? "cancel" : "complete"}</button>  
            <button onClick={()=>delBtn(todo.id)}>delete</button>  
          </div>
            )
        })}
      </div>
      </React.Fragment>

  )
}

export default Working