import React, { useState } from 'react'
import Form from './Form'
import List from './List'
import shortid from 'shortid'
import { Link } from 'react-router-dom'
import './todo.css'
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
      <h1 className="title_todo">TodoApp</h1>
      <button onClick={() => firebase.auth().signOut()}>Logout</button>
      <div className="wrap_todo">
        <p ><Link to="/Room" className="link_todo">トーク</Link></p>
        <p className="nav_todo">Todo</p> 
        <p ><Link to="/Recommended" className="link_todo">おすすめ</Link></p>
        <p ><Link to="/album" className="link_todo">卒業アルバム</Link></p>
      </div>
      <Form addTodo={addTodo} />
      <List
        todos={todos}
        deleteTodo={deleteTodo}
      />

    </>
  )
}
export default Todo