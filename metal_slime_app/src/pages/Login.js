import React, { useState, useContext } from 'react'
import { Redirect, Link } from 'react-router-dom'
import { AuthContext } from '../AuthService'

import firebase from '../config/Firebase'

import './style.css'

const Login = ({ history }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                history.push("/Room")
            })
            .catch(err => {
                console.log(err)
            })
    }

    const user = useContext(AuthContext)

    if (user) {
        return <Redirect to="/Room" />
    }

    return (
        <div className='signlog-page'>
            <form onSubmit={handleSubmit} className='signlog-form' >
                <h1 id='title' className='signlog-title'>ログイン</h1>
                <div className='signlog-input'>
                    <p className='signlog-name'>メールアドレス</p>
                    <input
                        className='input-name'
                        type='email'
                        id='email'
                        name='email'
                        placeholder='Email'
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                    />
                </div>
                <div className='signlog-input'>
                    <p className='signlog-name'>パスワード</p>
                    <input
                        className='input-name'
                        type='password'
                        id='password'
                        name='password'
                        placeholder='Password'
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                    />
                </div>
                <button type='submit' className='signlog-button'>ログイン</button>
            </form>
            <footer className='signlog'>
                <p><Link to='/signUp'>新規登録</Link></p>
            </footer>
        </div>
    )
}

export default Login;