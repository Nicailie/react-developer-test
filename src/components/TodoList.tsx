// import React, { useState } from 'react';

// type TodoItem = {
//   id: number;
//   text: string;
//   completed: boolean;
// };

// type TodoListProps = {
//   todos: TodoItem[];
// };

// const TodoList: React.FC<TodoListProps> = ({ todos }) => {
//   const [completedItems, setCompletedItems] = useState(new Map<number, boolean>());

//   const handleChange = (event: React.ChangeEvent<HTMLInputElement>, id: number) => {
//     const newCompletedItems = new Map(completedItems);
//     newCompletedItems.set(id, event.target.checked);
//     setCompletedItems(newCompletedItems);
//   };

//   return (
//     <ul>
//       {todos.map((todo) => (
//         <li key={todo.id}>
//           <input
//             type="checkbox"
//             checked={completedItems.get(todo.id) || false}
//             onChange={(event) => handleChange(event, todo.id)}
//           />
//           <span>{todo.text}{todo.completed && <>&nbsp;(Completed)</>}</span>
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default TodoList;

import React, { useState } from 'react';

interface TodoItem {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoListProps {
  todos: TodoItem[];
}

const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  const [todoItems, setTodoItems] = useState<TodoItem[]>(todos);

  const handleToggleCompleted = (id: number) => {
    const updatedTodoItems = todoItems.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    });
    setTodoItems(updatedTodoItems);
  };

  return (
    <ul>
      {todoItems.map(todo => (
        <li key={todo.id}>
          <label>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggleCompleted(todo.id)}
            />
            {todo.text}
          </label>
          {todo.completed && <span> : Completed</span>}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;