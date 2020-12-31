import React, { useState, useEffect, useContext } from 'react'
import firebase from '../config/Firebase'

import { AuthContext } from '../AuthService'

import { Link } from 'react-router-dom'

import './room.css'
import profile from '../img/profile.img.jpg'
import Button from '@material-ui/core/Button'

const Room = () => {

    const [messages, setMessages] = useState(null)
    const [value, setValue] = useState('')
    const [image, setImage] = useState('')

    const user = useContext(AuthContext)
    useEffect(() => {
        if (user) {

            firebase.firestore().collection('messages').orderBy('date')
                .onSnapshot((snapshot) => {
                    const messages = snapshot.docs.map(doc => {
                        return doc.data()
                    })
                    setMessages(messages)
                })
            firebase.storage().ref().child(`/images/${user.uid}`).getDownloadURL().then(fireBaseUrl => {
                setImage(fireBaseUrl)
            })
        }
}, [user])


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
            image: image,
            date: new Date()
        })
    setMessages([
        ...messages,
        {
            user: user.displayName,
            image: image,
            content: value,
            date: new Date()
        }
    ])
}


    return (
        <div>
            <h1 className="title_chat">トーク</h1>
            <div className="goto_update">
                <Button size="small" variant="outlined" onClick={() => firebase.auth().signOut()}>ログアウト</Button>
            <p><Link to="/update" className="link_chat">プロフィール変更</Link></p>
        </div>
        <div className="wrap_nav_chat">
            <p className="nav_chat">トーク</p>
            <p><Link to="/todo" className="link_chat">Todo</Link></p>
            <p><Link to="/Recommended" className="link_chat">おすすめ</Link></p>
            <p><Link to="/album" className="link_chat">卒業アルバム</Link></p>
        </div>
        <div className='took'>
            <ul className='room-ul'>
                {messages ?
                    messages.map((message, id) =>
                    (<li key={id} className='messages' >
                        <div className='icon'>
                            <img className='icon-img' src={message.image ? message.image : profile} />
                        </div>
                        <div>
                            <p >{message.user}</p>
                            <p className='message'>{message.content}</p>
                        </div>
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