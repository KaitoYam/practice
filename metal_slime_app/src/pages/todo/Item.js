import React, {useState} from 'react'

const Item = ({content, id, deleteTodo, isDone}) =>{
  const handleDelete = () => {
    deleteTodo(id)
  }

  return(
    <li>
      <input type="checkbox" onChange={() => {
          isDone = !isDone
      }}
      />
      <span style={
        {textDecoration: isDone ? 'line-through' : 'none'}
      }>{content}</span>
      <button onClick = {handleDelete}>削除</button>
    </li>
  )
}
export default Item