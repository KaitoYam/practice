import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import firebase from '../config/Firebase'

import './signUp&login.css'

const SignUp = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(({ user }) => {
                user.updateProfile({
                    displayName: name
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div className='signlog-page'>
            <form onSubmit={handleSubmit} className='signlog-form'>
            <h1 id='title' className='signlog-title'>新規登録</h1>
                <div className='signlog-input'>
                    <p className='signlog-name'>名前</p>
                    <input
                    className='input-name'
                        name='name'
                        type='name'
                        id='name'
                        placeholder='name'
                        onChange={(e) => {
                            setName(e.target.value)
                        }}
                    />
                </div>
                <div className='signlog-input'>
                    <p className='signlog-name'>メールアドレス</p>
                    <input
                    className='input-name'
                        name='email'
                        type='email'
                        id='email'
                        placeholder='email'
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                    />
                </div>
                <div className='signlog-input'>
                    <p className='signlog-name'>パスワード</p>
                    <input
                    className='input-name'
                        name='password'
                        type='password'
                        id='password'
                        placeholder='password'
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                    />
                </div>
                <button type='submit'　className='signlog-button signup-btn'>新規登録</button>
            </form>
            <footer className='signlog'>
                <p><Link to='/login'>ログインはこちら。</Link></p>
            </footer>
        </div>
    )
}

export default SignUp