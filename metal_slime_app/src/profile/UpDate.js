import React, { useState } from 'react'
import firebase, { storage } from '../config/Firebase'

const UpDate = () => {
    const [image, setImage] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const handleImage = e => {
        const image = e.target.files[0];
        setImage(image)
    }

    const onSubmit = e => {
        e.preventDefault()
        if (image === '') {
            alert('ファイルが選択されていません')
        }
        // アップロード処理

        const uploadTask = storage.ref(`/images/${image.name}`).put(image);
        uploadTask.on(
            firebase.storage.TaskEvent.STAET_CAHNGED,
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
        alert('エラー')
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
            <h1>画像アップロード</h1>
            <form onSubmit={onSubmit}>
                <input type='file' onChange={handleImage} />
                <button>Upload</button>
            </form>
            <img src={imageUrl} alt='uploaded' />
        </div>
    )
}

export default UpDate;