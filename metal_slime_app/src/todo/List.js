import React from 'react'
import Item from './Item'
import './todo.css'

const List = ({todos,deleteTodo}) =>{
  return(
    <ul className="list_style">
      {
        todos.map((todo) => {
          return (
            <Item 
                content ={todo.content}
                id = {todo.id}
                key = {todo.id}
                deleteTodo = {deleteTodo}
                isDone = {todo.isDone}
            />
          )
        })
      }
    </ul>
  )
}

export default List