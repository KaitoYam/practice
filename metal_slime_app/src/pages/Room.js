import React, { useState, useEffect, useContext, useRef } from 'react'
import firebase from '../config/Firebase'

import { AuthContext } from '../AuthService'

import './room.css'
import profile from '../img/profile.img.jpg'
import { Paper, Avatar } from '@material-ui/core'

const Room = () => {

    const [messages, setMessages] = useState(null)
    const [value, setValue] = useState('')
    const [image, setImage] = useState('')

    const user = useContext(AuthContext)
    //AuthserviceのReact.createContextからの戻り値で認証ユーザー

    useEffect(() => {
        firebase.firestore().collection('messages').orderBy('date')
            .onSnapshot((snapshot) => {
                const messages = snapshot.docs.map(doc => {
                    return doc.data()
                })
                //　onsnapshotでmessagesコレクションのデータを取得（docsはランダムデータID） 
                setMessages(messages)
            })
        firebase.storage().ref().child(`/images/${user.uid}`).getDownloadURL().then(fireBaseUrl => {
            setImage(fireBaseUrl)

        })
    }, [])

    const scrollEndRef = useRef(null)
    useEffect(() => {
        const scrollArea = document.getElementById('scroll')
        if (scrollArea) {
            scrollArea.scrollIntoView({ behavior: "smooth", block: "end" })
        }
    })


    const handleSubmit = e => {
        e.preventDefault()
        const textNone = document.getElementById('tuika')
        if (textNone.value === '')
            return;
        else
            textNone.value = ''
        firebase.firestore().collection('messages').doc()
            .set({
                user: user.displayName,
                content: value,
                image: image,
                date: new Date(),
                uid: user.uid //各々のユーザー情報(id)
            })
        setMessages([
            ...messages,
            {
                user: user.displayName,
                image: image,
                content: value,
                date: new Date(),
                uid: user.uid
            }
        ])
    }


    return (
        <div>
            <h1 className="title_chat">トーク</h1>
            
            <div className='took'>
                <Paper>
                    {/* ↓今のメッセージの数 */}
                    <div className='room-ul' id='scroll' ref={scrollEndRef} >
                        {messages
                            ?
                            messages.map((message, id) =>
                            (<React.Fragment key={id} >
                                {message.uid !== user.uid && <div className='messages-left'>
                                    <Avatar>
                                        <div className='icon'>
                                            <img className='icon-img' src={message.image ? message.image : profile} />
                                        </div>
                                    </Avatar>
                                    <div>
                                        <p className='user-name'>{message.user}</p>
                                        <p className='message-left'>{message.content}</p>
                                    </div>
                                </div>}
                                {message.uid === user.uid && <div className='messages-right'>
                                    <div>
                                        {/* <p>{message.user}</p> */}
                                        <p className='message-right'>{message.content}</p>
                                    </div>
                                </div>}
                            </React.Fragment>)
                            ) :
                            <p>...loading</p>
                        }
                    </div>
                </Paper>
                {/* ↓自分でメッセージをつくりだす */}
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