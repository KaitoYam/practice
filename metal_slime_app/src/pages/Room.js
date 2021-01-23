import React, { useState, useEffect, useContext, useRef } from 'react'
import firebase from '../config/Firebase'

import { AuthContext } from '../AuthService'

import './room.css'
import profile from '../img/profile.img.jpg'
import { Paper, Avatar, Button } from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send'
import moment from 'moment'　// その時の時間表示

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
        console.log('image')
    }, [])
    console.log(image)

    // スクロール内の下へ移動/ react-scroll-into-viewをインストール
    const chatScrollEnd = useRef(null)
    const scrollToBottom = () => {
        if (chatScrollEnd.current) {
            chatScrollEnd.current.scrollIntoView({ block: "end", behavior: "smooth" })
        }
    }
    useEffect(scrollToBottom, [messages])


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
                createAt: new Date().getTime(),　// 時間を取得
                uid: user.uid //各々のユーザー情報(id)
            })
        setMessages([
            ...messages,
            {
                user: user.displayName,
                image: image,
                content: value,
                //date: new Date(),
                uid: user.uid
            }
        ])
    }

    let view = ''

    return (
        <div>
            <h1 className="title_chat">トーク</h1>

            <div className='took'>
                <Paper>
                    {/* ↓今のメッセージの数 */}
                    <div className='room-ul' >
                        {messages
                            ?
                            messages.map((message, id) =>
                            (<React.Fragment key={id} >
                                <p>{(() => {
                                    if(view !== moment(message.createAt).format('YYYY/MM/DD')){
                                        view = moment(message.createAt).format('YYYY/MM/DD')
                                        return(view)
                                    }
                                })()}</p>
                                {message.uid !== user.uid && <div className='messages-left'>
                                    <Avatar>
                                        <div className='icon'>
                                            <img className='icon-img' src={message.image ? message.image : profile} alt='プロフィール画像' />
                                        </div>
                                    </Avatar>
                                    <div>
                                        <p className='user-name'>{message.user}</p>
                                        <p className='message-left'>{message.content}</p>
                                        <p className='message-time time-right'>{moment(message.createAt).format('A HH:mm')}</p>
                                    </div>
                                </div>}
                                {message.uid === user.uid && <div className='messages-right'>
                                    <div>
                                        <p className='message-right'>{message.content}</p>
                                        <p className='message-time time-left'>{moment(message.createAt).format('A HH:mm')}</p>
                                    </div>
                                </div>}
                            </React.Fragment>)
                            ) :
                            <p>...loading</p>
                        }
                        <div ref={chatScrollEnd} />
                    </div>
                </Paper>
                {/* ↓自分でメッセージをつくりだす */}
                <form onSubmit={handleSubmit} className='took-form2' >
                    <div className='took-form'>
                        <input
                            type='text'
                            id='tuika'
                            placeholder='メッセージを入力'
                            onChange={e => setValue(e.target.value)}
                        />
                    </div>
                    <Button variant="contained" color="primary" style={{ background: '#616161', marginTop: '1rem' }} >
                        <SendIcon />
                    </Button>
                </form>
            </div>
        </div>
    )
}

export default Room