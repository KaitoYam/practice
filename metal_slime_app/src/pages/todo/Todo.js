import React, {useState} from 'react'
import Form from './Form'
import List from './List'
import shortid from 'shortid'
import firebase from '../../config/Firebase'

const Todo = () =>{
  const [todos, setTodos] = useState([
    // {content: '課題をする' , id: '1', isDone : false},
    // { content: '洗濯をする', id: '2', isDone: false},
    // { content: '電話をする', id: '3', isDone: false},
    // { content: '神様になる', id: '4', isDone: false}
  ])
  const addTodo = content => {
    setTodos([
      ...todos,
      {
        content: content,
        id : shortid.generate(),
        isDone : false
      }
    ])
  }
  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id))
  }
  // const [isDone, setIsDone] = useState(false)
  // const state_management = isDone => {
  //   setIsDone(!isDone) 
  // }
  return(
    <>
    <h1>TodoApp</h1>
    <Form addTodo = {addTodo}/>
    <List 
      todos = {todos} 
      deleteTodo = {deleteTodo} 
    />
      
    </>
  )
}
export default Todo