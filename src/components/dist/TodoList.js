"use strict";
// import React, { useState } from 'react';
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
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
var react_1 = require("react");
var TodoList = function (_a) {
    var todos = _a.todos;
    var _b = react_1.useState(todos), todoItems = _b[0], setTodoItems = _b[1];
    var handleToggleCompleted = function (id) {
        var updatedTodoItems = todoItems.map(function (todo) {
            if (todo.id === id) {
                return __assign(__assign({}, todo), { completed: !todo.completed });
            }
            return todo;
        });
        setTodoItems(updatedTodoItems);
    };
    return (react_1["default"].createElement("ul", null, todoItems.map(function (todo) { return (react_1["default"].createElement("li", { key: todo.id },
        react_1["default"].createElement("label", null,
            react_1["default"].createElement("input", { type: "checkbox", checked: todo.completed, onChange: function () { return handleToggleCompleted(todo.id); } }),
            todo.text),
        todo.completed && react_1["default"].createElement("span", null, " : Completed"))); })));
};
exports["default"] = TodoList;
