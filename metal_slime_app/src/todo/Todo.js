import React, { useState, useEffect, useContext } from 'react'
import Form from './Form'
import { Link } from 'react-router-dom'
import { AuthContext } from '../AuthService'
import './todo.css'
import firebase from '../config/Firebase'

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
        user:user.displayName
      })
  }
  useEffect(() => {
    firebase.firestore().collection('todos').where("user", "==", user.displayName).onSnapshot((snapshot) => {
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
  }, [])

  return (
    <>
      <h1 className="title_todo">Todoリスト</h1>
      <button onClick={() => firebase.auth().signOut()}>Logout</button>
      <div className="wrap_todo">
        <p ><Link to="/Room" className="link_todo">トーク</Link></p>
        <p className="nav_todo">Todo</p> 
        <p ><Link to="/Recommended" className="link_todo">おすすめ</Link></p>
        <p ><Link to="/album" className="link_todo">卒業アルバム</Link></p>
      </div>
      <Form addTodo={addTodo} />
      <ul className="list_style">
        {todos ?
          todos.map((todo, id) =>
          (<li key={id}>
            <input type="checkbox" onChange={() => {
              firebase.firestore().collection('todos').where("content", "==", todo.content).get().then(function (querySnapshot) {
                querySnapshot.forEach(function (doc) {
                  doc.ref.update({state: !doc.data().state});
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