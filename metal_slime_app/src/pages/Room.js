import React, { useState, useEffect, useContext } from 'react'
import firebase from '../config/Firebase'

import { AuthContext } from '../AuthService'

import { Link } from 'react-router-dom'

import './room.css'

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
        const textNone = document.getElementById('tuika')
        if (textNone.value === '')
            alert("ない")
        else
            textNone.value = ''
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
                <button onClick={() => firebase.auth().signOut()}>Logout</button>
                <h1>トーク</h1>
            </header>
            <div className='took'>
                <ul className='room-ul'>
                    {messages ?
                        messages.map((message, id) =>
                            (<li key={id} className='message'>{message.user}:{message.content}</li>)
                        ) :
                        <p>...loading</p>
                    }
                </ul>
                <form onSubmit={handleSubmit} className='took-form'>
                    <div className='took-form2'>
                        <input
                            type='text'
                            id='tuika'
                            placeholder='メッセージを入力'
                            onChange={e => setValue(e.target.value)}
                        />
                        <div type='submit' className='took-button'></div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Room