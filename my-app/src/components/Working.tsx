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
    <div>
      <h2>Working</h2>
      {todos.map(todo=> {
        if(!todo.isDone)
          return (
        <div key={todo.id}>
          {todo.title} & {todo.contents}
          <button onClick={()=>chgBtn(todo)}>cancel</button>  
          <button onClick={()=>delBtn(todo.id)}>delete</button>  
        </div>
          )
      })}
      
      
    </div>
  )
}

export default Working

// import React from 'react';

// interface Todo {
//   id: number;
//   title: string;
//   contents: string;
//   isDone: boolean;
// }

// interface Props {
//   todos: Todo[];
//   setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
// }

// const Working: React.FC<Props> = ({ todos, setTodos }) => {
//   const delBtn = (id: number) => {
//     const rfTodos = todos.filter(el => el.id !== id);
//     setTodos(rfTodos);
//   };
  
//   const chgBtn = (todo: Todo) => {
//     todo.isDone = !todo.isDone;
//     const updatedTodos = todos.map(el => (el.id === todo.id ? todo : el));
//     setTodos(updatedTodos);
//   };

//   return (
//     <div>
//       <h2>WORKING</h2>
//       {todos.map(todo => {
//         if (!todo.isDone)
//           return (
//             <div key={todo.id}>
//               {todo.title} : {todo.contents}
//               <button onClick={() => delBtn(todo.id)}>del</button>
//               <button onClick={() => chgBtn(todo)}>{todo.isDone ? 'canc' : 'done'}</button>
//             </div>
//           );
//       })}
//     </div>
//   );
// };

// const Done: React.FC<Props> = ({ todos, setTodos }) => {
//   const delBtn = (id: number) => {
//     const rfTodos = todos.filter(el => el.id !== id);
//     setTodos(rfTodos);
//   };
  
//   const chgBtn = (todo: Todo) => {
//     todo.isDone = !todo.isDone;
//     const updatedTodos = todos.map(el => (el.id === todo.id ? todo : el));
//     setTodos(updatedTodos);
//   };

//   return (
//     <div>
//       <h2>DONE</h2>
//       {todos.map(todo => {
//         if (todo.isDone)
//           return (
//             <div key={todo.id}>
//               {todo.title} : {todo.contents}
//               <button onClick={() => delBtn(todo.id)}>del</button>
//               <button onClick={() => chgBtn(todo)}>{todo.isDone ? 'canc' : 'done'}</button>
//             </div>
//           );
//       })}
//     </div>
//   );
// };

// export { Working, Done };
