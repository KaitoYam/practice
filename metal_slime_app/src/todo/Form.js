import React, {useState} from 'react'


//MaaterialUI

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

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
  //MaterialUI
  const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));
  const classes = useStyles();
  return (
  <form onSubmit = {handleSubmit} className={classes.root} noValidate autoComplete="off">
      <TextField size="small" id="inptext" label="todoの追加" onChange={e => {
          setValue(e.target.value)
        }}/>
  </form>
  )
}

export default Form