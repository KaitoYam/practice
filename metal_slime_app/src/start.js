import React from 'react'
import './start.css'

import { Button } from '@material-ui/core'

const Start = () => {
    return (
        <div className='start'>
            <div className='start2'>
                <h1 className='start-title' ><span>41期卒業サイト</span></h1>
            </div>
            <div className='signup'>
            <Button href='/signup' style={{color:'#fff'}}>新規登録</Button>
            </div>
            <div className='login'>
            <Button href='/login' style={{color:'#fff'}}>ログイン</Button>
            </div>
        </div>
    )
}

export default Start