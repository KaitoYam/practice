import React, { useState, useContext, useEffect } from 'react'
import { AuthContext } from '../AuthService'
import firebase from '../config/Firebase'
import { Avatar } from '@material-ui/core'
import profile from '../img/profile.img.jpg'

const HeaderImage = () => {
    const [image, setImage] = useState(null)
    const user = useContext(AuthContext)

    useEffect(() => {
        if (user) {
            firebase.storage().ref().child(`images/${user.uid}`).getDownloadURL().then(Url => {
                setImage(Url)
            })
        }
    }, [user])
    console.log(image)
    console.log('image')

    return (
        <>
            { user &&
                <>
                    <Avatar>
                        <img className='app-image' src={image ? image : profile} alt='NOプロフィール' />
                    </Avatar>
                </>
            }
        </>
    )
}

export default HeaderImage