import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'

import firebase, { storage } from '../config/Firebase'
import { AuthContext } from '../AuthService'

const UpDate = () => {
    const [image, setImage] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const handleImage = e => {
        const image = e.target.files[0];
        // e.target.files[0]　でファイル選択で選ばせたファイルになる
        setImage(image)
    }
    
    const user = useContext(AuthContext)

    // const updateProfileDate = {
    //     imageUrl:''
    // }
    const handleUpdate = e => {
        e.preventDefault()
        // if (imageUrl !== user.imageUrl) {
        //     updateProfileDate = {
        //         ...updateProfileDate,imageUrl:imageUrl
        //     }
        // }
    }
    const onSubmit = e => {
        e.preventDefault()
        if (image === '') {
            return;
        }

        
        
        firebase.firestore().collection('profile').add({
            user: user.displayName,
            date: new Date(),
            imgUrl:imageUrl
        })
        
        // アップロード処理
        
        const uploadTask = storage.ref(`/images/${image.name}`).put(image);
        // storage.ref(`/images/${image.name}`) でfirebase storageにフォルダとファイル名を指定し、アップロード
        uploadTask.on(
            firebase.storage.TaskEvent.state_changed,
            next,
            error,
            complete
        )
        // nextはアップロードの進行度や状態を取得するための関数
        // error　エラーが起きた時の処理
        // complete アップロード成功後の処理

    }

    const next = snapshot => {
        // 進行中のsnapshotを得る
        //　アップロードの進行度を表示
        const precent = (snapshot.bytesTtansferred / snapshot.totalBytes)
        console.log(precent + '% done')
        console.log(snapshot)
    }

    const error = () => {
        // エラーハンドリング
        console.log('error')
    }

    const complete = () => {
        // 完了後の処理
        //　画像表示のため、アップロードした画像のURLを取得
        storage.ref('images').child(image.name).getDownloadURL().then(fireBaseUrl => {
            setImageUrl(fireBaseUrl)
        })
    }

    return (
        <div>
            <h1>プロフィール編集画面</h1>
            <button onClick={() => firebase.auth().signOut()}>Logout</button>
            <div>
                <p><Link to="/room" >トーク</Link></p>
                <p><Link to="/todo" >Todo</Link></p>
                <p><Link to="/Recommended" >おすすめ</Link></p>
                <p><Link to="/album" >卒業アルバム</Link></p>
            </div>
            <form onSubmit={onSubmit}>
                <input type='file' onChange={handleImage} />
                <button>Upload</button>
            </form>
            <img src={imageUrl} alt='' />
            {/* <button　onSubmit={handleUpdate}>更新</button> */}
        </div>
    )
}

export default UpDate;