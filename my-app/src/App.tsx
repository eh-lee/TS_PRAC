import React, { useState } from 'react';
import Form from './components/Form';
import { Done, Working } from './components/Working';


interface Todo {
  id: number;
  title: string;
  contents: string;
  isDone: boolean;
}

const App: React.FC = () => {
  const INITIAL_STATE: Todo[] = [
    {
      id: 1,
      title: 'title1',
      contents: 'contents1',
      isDone: false,
    },
  ];

  const [todos, setTodos] = useState<Todo[]>(INITIAL_STATE);

  return (
    <div>
      <h2>To Do List</h2>
      <Form todos={todos} setTodos={setTodos}/>
      <Working todos={todos} setTodos={setTodos}/>
      <Done todos={todos} setTodos={setTodos}/>
    </div>
  );
};

export default App;
