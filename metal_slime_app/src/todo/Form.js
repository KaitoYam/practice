import React, {useState} from 'react'

const Form = ({addTodo}) => {
  const [value, setValue] = useState('')
  const handleSubmit = e => {
    e.preventDefault()
    console.log('value: ', value)

  //JSを使ってフォーム内テキストをゲット
  var reflesh = document.getElementById("inptext");

  if(reflesh.value === "")
    alert("中身が空です");
  else
    addTodo(value)

  //JSを使ってフォーム内テキストをリセット
    reflesh.value ="";
  }

  return (
    <form onSubmit = {handleSubmit}>
      <input
        type="text"
        id = "inptext"
        onChange={e => {
          setValue(e.target.value)
        }}
      />
      <input type="submit" />
    </form>
  )
}

export default Form