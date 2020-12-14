import React, { useState,useContext } from 'react'
import { Redirect } from 'react-router-dom'
import { AuthContext } from '../AuthService'

import firebase from '../config/Firebase'

const Login = ({ history }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(() => {
                history.pushState("/Room")
            })
            .catch(err => {
                console.log(err)
            })
    }

    const user = useContext(AuthContext)

    if (user) {
        return <Redirect to ="/Room" />
    }

    return (
        <div>
            <h1>Login</h1>
            <from onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='email'>E-mail</label>
                    <input
                        type='email'
                        id='email'
                        name='email'
                        placeholder='Email'
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                    />
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <input
                        type='password'
                        id='password'
                        name='password'
                        placeholder='Password'
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                    />
                </div>
                <button type='submit'>Login</button>
            </from>
        </div>
    )
}

export default Login;