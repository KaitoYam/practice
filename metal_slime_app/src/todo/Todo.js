import React, { useState } from 'react'
import Form from './Form'
import List from './List'
import shortid from 'shortid'

import { Link } from 'react-router-dom'

import firebase from '../config/Firebase'

const Todo = () => {
  const [todos, setTodos] = useState([])
  const addTodo = content => {
    setTodos([
      ...todos,
      {
        content: content,
        id: shortid.generate(),
        isDone: false
      }
    ])
  }
  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  

  return (
    <>
      <header>
        <p><Link to="/Room">トークルーム</Link></p>
        <p><Link to="/Recommended">おすすめ</Link></p>
        <p><Link to="/album">卒業アルバム</Link></p>
        <button onClick={() => firebase.auth().signOut()}>Logout</button>
      </header>
      <h1>TodoApp</h1>
      <Form addTodo={addTodo} />
      <List
        todos={todos}
        deleteTodo={deleteTodo}
      />

    </>
  )
}
export default Todo