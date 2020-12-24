import React, { useState, useEffect, useContext } from 'react'
import firebase from '../config/Firebase'

import { AuthContext } from '../AuthService'

import { Link } from 'react-router-dom'

const Room = () => {

    const [messages, setMessages] = useState(null)
    const [value, setValue] = useState('')

    useEffect(() => {
        firebase.firestore().collection('messages').orderBy('date')
            .onSnapshot((snapshot) => {
                const messages = snapshot.docs.map(doc => {
                    return doc.data()
                })
                setMessages(messages)
            })
    }, [])
    const user = useContext(AuthContext)

    const handleSubmit = e => {
        e.preventDefault()
        firebase.firestore().collection('messages')
            .add({
                user: user.displayName,
                content: value,
                date: new Date()
            })
        setMessages([
            ...messages,
            {
                user: user.displayName,
                email: user.email,
                content: value,
                date: new Date()
            }
        ])
    }


    return (
        <div>
            <header>
                <p><Link to="/todo">Todoリスト</Link></p>
                <p><Link to="/Recommended">おすすめ</Link></p>
            </header>
            <h1>トーク</h1>
            <p>チャットアプリ</p>
            <ul>
                {messages ?
                    messages.map((message, id) =>
                        (<li key={id}>{message.user}:{message.content}</li>)
                    ) :
                    <p>...loading</p>
                }
            </ul>
            <form onSubmit={handleSubmit}>
                <input
                    type='text' id='tuika'
                    onChange={e => setValue(e.target.value)}
                />
                <button type='submit'>送信</button>
            </form>
            <button onClick={() => firebase.auth().signOut()}>Logout</button>
        </div>
    )
}

export default Room