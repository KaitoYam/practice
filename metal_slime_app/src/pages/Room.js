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
            return;
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
            <h1 class="title_chat">トーク</h1>
            <button onClick={() => firebase.auth().signOut()}>Logout</button>
            <div class="wrap_nav_chat">
                <p class="nav_chat">トーク</p>
                <p><Link to="/todo" class="link_chat">Todo</Link></p>
                <p><Link to="/Recommended" class="link_chat">おすすめ</Link></p>
                <p><Link to="/album" class="link_chat">卒業アルバム</Link></p>
            </div>
            <div className='took'>
                <ul className='room-ul'>
                    {messages ?
                        messages.map((message, id) =>
                            (<li key={id} >
                                <p>{message.user}</p>
                                <p className='messages'>{message.content}</p>
                            </li>)
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