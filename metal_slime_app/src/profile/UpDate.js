import React, { useState, useContext, useEffect } from 'react'

import profile from '../img/profile.img.jpg'
import './UpDate.css'
import { Paper, Fab } from '@material-ui/core'
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate'

import firebase from '../config/Firebase'
import { AuthContext } from '../AuthService'

const UpDate = () => {
    const [image, setImage] = useState(null)

    const user = useContext(AuthContext)

    useEffect(() => {
        firebase.storage().ref().child(`images/${user}`).getDownloadURL().then(fireBaseUrl => {
            //アップロードした画像のURLを取得
            setImage(fireBaseUrl)
        })
    }, [])

    const handleImage = e => {
        const images = e.target.files
        // e.target.filesでファイル選択で選んだファイルになる
        let blob = new Blob(images, { type: "image/jpeg" })
        //Blob()コンストラクタはimages(画像など)をデータ化したもの

        const uploadTask = firebase.storage().ref().child(`/images/${user.uid}`).put(blob)
        //putでデータをアップロードする

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
        <>
            <h1 className="title_update">プロフィール編集</h1>

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
        </>
    )
}

export default UpDate;