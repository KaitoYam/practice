import React, { useState, useContext, useEffect } from 'react'

import { Link } from 'react-router-dom'
import profile from '../img/profile.img.jpg'
import './UpDate.css'
import { Button, Paper, Fab } from '@material-ui/core'
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate'

import firebase from '../config/Firebase'
import { AuthContext } from '../AuthService'


const UpDate = () => {
    const [image, setImage] = useState(null)

    const user = useContext(AuthContext)

    useEffect(() => {
        firebase.storage().ref().child(`images/${user.uid}`).getDownloadURL().then(fireBaseUrl => {
            //アップロードした画像のURLを取得
            setImage(fireBaseUrl)
        })
    }, [])

    const handleImage = e => {
        const images = e.target.files
        // e.target.filesでファイル選択で選んだファイルになる
        let blob = new Blob(images, { type: "image/jpeg" })

        const uploadTask = firebase.storage().ref().child(`/images/${user.uid}`).put(blob)

        uploadTask.then(() => {
            // 通信が成功した時の処理(then)
            uploadTask.snapshot.ref.getDownloadURL().then((fireBaseUrl => {
                setImage(fireBaseUrl)
                console.log('new', image)
            }))
        })
            .then(() => {
                user.updateProfile({
                    photoURL: image
                })
            })
    }


    return (
        <div>
            <h1 className="title_update">プロフィール編集</h1>
            <div className="wrap_nav_update">
                <p><Link to="/room" className="link_update">トーク</Link></p>
                <p><Link to="/todo" className="link_update">Todo</Link></p>
                <p><Link to="/Recommended" className="link_update">おすすめ</Link></p>
                <p><Link to="/album" className="link_update">卒業アルバム</Link></p>
                <button onClick={() => firebase.auth().signOut()}>Logout</button>
            </div>
            <div className='profile'>
                <Paper style={{ padding: 16 }} elevation={1} >
                    <div className='preview'>
                        <img src={image ? image : profile} className='preview-img' alt='プレビュー画像表示' />
                    </div>
                    <input type='file' id='button-file' className='button-file' onChange={handleImage} />
                    <div className='icon-file'>
                        <Fab>
                            <label htmlFor='button-file' className='label-size'>
                                <AddPhotoAlternateIcon />
                            </label>
                        </Fab>
                    </div>
                </Paper>
            </div>
        </div>
    )
}

export default UpDate;