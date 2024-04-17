import React, { useState } from 'react'

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

const Form: React.FC<AppProps> = ({ todos, setTodos }) => {
  const [title, setTitle] = useState<string>("");
  const [contents, setContents] = useState<string>("");

  const titleHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  }

  const contentsHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContents(e.target.value);
  }

  const addBtnHandler = () => {
    const newTodo:Todo = {
      id: todos.length+1,
      title,
      contents,
      isDone: false,
    };
    setTodos([...todos, newTodo]);
    setTitle("");
    setContents("");
  }

  return (
    <div>
      title : <input type="text" value={title} onChange={titleHandler} />
      contents : <input type="text" value={contents} onChange={contentsHandler} />
      <button onClick={addBtnHandler}>ADD</button>
    </div>
  )
}

export default Form