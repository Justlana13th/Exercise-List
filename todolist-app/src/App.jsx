import { useState } from 'react'
import TodoList from './Component/TodoList'
import './App.css'

function App() {

  return (
    <div className="card">
      <div className="card__heading">
        <h1>Todo</h1>
      </div>
      <div className="card__content">
        <TodoList/>
      </div>
    </div>
  )
}

export default App
