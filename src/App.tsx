import { Component, useState } from 'react';
import React from 'react';
import reactLogo from './assets/react.svg';
import Header from './components/Header';
import Counter from './components/Counter';
import viteLogo from '/vite.svg';
import './App.css';
import TodoList from './components/TodoList';

interface TodoItem {
  id: number;
  text: string;
  completed: boolean;
}

const App: React.FC = () => {
  const todos = [
    { id:1, text: 'Do laundry', completed:false},
    {id:2, text: 'Buy groceries', completed:false},
    {id:3, text: 'Clean the room', completed:false},
    {id:4, text: 'Go in the town', completed:false},
  ]
  const [count, setCount] = useState(0)
  return (   
    <>
    <Header title = "My App Header"/>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h2>Vite + React</h2>
      <div className="card">
        <Counter/>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <h1> Todo List</h1>
      <TodoList todos = {todos}/>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>     
    </>
  )
}

export default App

