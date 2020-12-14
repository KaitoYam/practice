import React, { useState, useEffect, useContext } from 'react'
import firebase from '../config/Firebase'

import { AuthContext } from '../AuthService'

const Room = () => {

    const [messages, setMessages] = useState(null)
    const [value, setValue] = useState('')

    useEffect(() => {
        firebase.firestore().collection('messages')
            .onSnapshot((snapshot) => {
                const messages = snapshot.docs.map(doc => {
                    return doc.date()
                })

                setMessages(messages)
            })
    }, [])

    const user = useContext(AuthContext)

    const handleSubmit = () => {
        firebase.firestore().collection('message').add({
            content: value,
            user: user.displayName
        })
    }


    return (
        <div>
            <h1>Room</h1>
            <ul>
                <li>チャットアプリ</li>
                {messages ? messages.map(message => (<li>{message.user}:{message.content}</li>)) 
                : 
                <p>...loading</p>
                }
            </ul>
            <form onSubmit={handleSubmit}>
                <input
                    type='type'
                    value={value}
                    onChange={e => setValue(e.target.value)}
                />
                <button type='submit'>送信</button>
            </form>
            <button onClick={() => firebase.auth().signOut}>Logout</button>
        </div>
    )
}

export default Room;