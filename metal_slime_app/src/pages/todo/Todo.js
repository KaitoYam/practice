import React, {useState} from 'react'
import Form from './Form'
import List from './List'
import shortid from 'shortid'

const Todo = () =>{
  const [todos, setTodos] = useState([])
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