import React, { useState, useEffect, useContext } from 'react'
import Form from './Form'
import { AuthContext } from '../AuthService'
import './todo.css'
import firebase from '../config/Firebase'

//MaaterialUI
// import { makeStyles } from '@material-ui/core/styles';


const Todo = () => {
  const [todos, setTodos] = useState([])
  const user = useContext(AuthContext)
  const addTodo = contents => {
    console.log(contents)
    firebase.firestore().collection('todos')
      .add({
        state: false,
        content: contents,
        date: new Date(),
        user: user.displayName
      })
  }
  // const useStyles = makeStyles((theme) => ({
  //   root: {
  //     '& > *': {
  //       margin: theme.spacing(1),
  //     },
  //   },
  // }));

  useEffect(() => {
    if (user) {
      firebase.firestore().collection('todos').where("user", "==", user.displayName)
      .onSnapshot((snapshot) => {
        const todos = snapshot.docs.map(doc => {
          return doc.data()
        })
        setTodos(todos)
      })
      var delete_todos = firebase.firestore().collection('todos').where("state", "==", true);
      delete_todos.get().then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          console.log(doc.id, " => ", doc.data());
          doc.ref.delete();
        });
      })
    }
  }, [user])

  //MaterialUI
  // const classes = useStyles();

  return (
    <>
      <h1 className="title_todo">Todoリスト</h1>

      <h4 className="purpose">目標：アプリを一つ作る</h4>
      <Form addTodo={addTodo} />
      <ul className="list_style">
        {todos ?
          todos.map((todo, id) =>
          (<li key={id}>
            <input type="checkbox" onChange={() => {
              firebase.firestore().collection('todos').where("content", "==", todo.content).get().then(function (querySnapshot) {
                querySnapshot.forEach(function (doc) {
                  doc.ref.update({ state: !doc.data().state });
                });
              })
            }}
            />
            <span>{todo.content}</span>
          </li>)
          ) :
          <p>...loading</p>
        }
      </ul>
    </>
  )
}
export default Todo