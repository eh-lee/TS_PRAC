import React, { useState } from 'react'
import { clearScreenDown } from 'readline'
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


// import React, { useState } from 'react';
// import Form from './components/Form';
// import { Done, Working } from './components/Working';
// import "./tailwind.css"
// // 테일윈드 웨않되?

// type Todo = {
//   id: number;
//   title: string;
//   contents: string;
//   isDone: boolean;
// }

// const App: React.FC = () => {
//   const INITIAL_STATE: Todo[] = [
//     {
//       id: 1,
//       title: 'title1',
//       contents: 'contents1',
//       isDone: false,
//     },
//   ];

//   const [todos, setTodos] = useState<Todo[]>(INITIAL_STATE);

//   return (
//     <div className="bg-slate-500 p-40">
//         {/* <h1 className="text-3xl font-bold underline text-center"> */}
//         <h1 className="text-xl font-bold underline text-center">
//           tailwind test
//         </h1>
//       <h2>To Do List</h2>
//       <Form todos={todos} setTodos={setTodos}/>
//       <Working todos={todos} setTodos={setTodos}/>
//       <Done todos={todos} setTodos={setTodos}/>
//     </div>
//   );
// };

// export default App;
