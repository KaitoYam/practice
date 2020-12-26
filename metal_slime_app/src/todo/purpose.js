import React from 'react'
import {AuthContext} from '../AuthService'
import firebase from '../config/Firebase'
const Purpose = () => {
  const user = user.displayName
  const addPurpose = purpose => {
    firebase.firestore().collection('Purpose')
      .set({
        purpose: purpose,
        user: user.displayName
      })
  }
}

export default Purpose